import React, { useEffect, useState } from 'react'
import { useClient } from 'sanity'
import {
  BookOpen, Users, GraduationCap, DollarSign, TrendingUp,
  Search, Bell, Plus, Star, Clock, ChevronDown,
  Award, CreditCard, MessageSquare, BarChart3, Settings,
  LayoutDashboard, HelpCircle, Zap
} from 'lucide-react'
import { writeClient } from '@/lib/sanity'

/* ── colour tokens ───────────────────────────────────────── */
const blue   = '#4F6EF7'
const green  = '#22C55E'
const purple = '#A855F7'
const orange = '#F59E0B'

/* ── tiny helpers ────────────────────────────────────────── */
const StatCard = ({ icon: Icon, iconBg, label, value, change }: any) => (
  <div style={{
    background: '#fff', borderRadius: 16, padding: '24px 28px',
    display: 'flex', alignItems: 'center', gap: 18, flex: 1,
    boxShadow: '0 1px 3px rgba(0,0,0,.06)', border: '1px solid #f0f0f5'
  }}>
    <div style={{
      width: 52, height: 52, borderRadius: 14, background: iconBg + '18',
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <Icon size={24} color={iconBg} />
    </div>
    <div>
      <div style={{ fontSize: 13, color: '#94a3b8', fontWeight: 500 }}>{label}</div>
      <div style={{ fontSize: 28, fontWeight: 800, color: '#0f172a', lineHeight: 1.2 }}>{value}</div>
      <div style={{ fontSize: 12, color: green, fontWeight: 600, marginTop: 2 }}>
        <TrendingUp size={12} style={{ display: 'inline', marginRight: 3 }} />
        {change}
      </div>
    </div>
  </div>
)

/* ── mini SVG line-chart ─────────────────────────────────── */
const MiniLineChart = ({ data, width = 520, height = 200 }: any) => {
  const max = Math.max(...data.map((d: any) => d.v))
  const pts = data.map((d: any, i: number) => {
    const x = (i / (data.length - 1)) * width
    const y = height - (d.v / max) * (height - 20)
    return `${x},${y}`
  })
  const areaPath = `M0,${height} L${pts.join(' L')} L${width},${height} Z`
  return (
    <svg viewBox={`0 0 ${width} ${height + 30}`} style={{ width: '100%', height: 220 }}>
      <defs>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={blue} stopOpacity="0.15" />
          <stop offset="100%" stopColor={blue} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#areaGrad)" />
      <polyline points={pts.join(' ')} fill="none" stroke={blue} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {data.map((d: any, i: number) => {
        const x = (i / (data.length - 1)) * width
        const y = height - (d.v / max) * (height - 20)
        return <circle key={i} cx={x} cy={y} r={4} fill="#fff" stroke={blue} strokeWidth={2} />
      })}
      {data.map((d: any, i: number) => {
        const x = (i / (data.length - 1)) * width
        return <text key={`l${i}`} x={x} y={height + 22} textAnchor="middle" fontSize={11} fill="#94a3b8">{d.l}</text>
      })}
    </svg>
  )
}

/* ── mini SVG bar-chart ──────────────────────────────────── */
const MiniBarChart = ({ data, width = 520, height = 200 }: any) => {
  const max = Math.max(...data.map((d: any) => d.v))
  const barW = width / data.length * 0.5
  const gap  = width / data.length
  return (
    <svg viewBox={`0 0 ${width} ${height + 30}`} style={{ width: '100%', height: 220 }}>
      {data.map((d: any, i: number) => {
        const barH = (d.v / max) * (height - 10)
        const x = i * gap + (gap - barW) / 2
        const y = height - barH
        return (
          <g key={i}>
            <rect x={x} y={y} width={barW} height={barH} rx={6} fill={blue} opacity={0.85} />
            <text x={x + barW / 2} y={height + 20} textAnchor="middle" fontSize={11} fill="#94a3b8">{d.l}</text>
          </g>
        )
      })}
    </svg>
  )
}

/* ── sidebar link ────────────────────────────────────────── */
const SideLink = ({ icon: Icon, label, active, onClick }: any) => (
  <div onClick={onClick} style={{
    display: 'flex', alignItems: 'center', gap: 12, padding: '11px 20px',
    borderRadius: 12, cursor: 'pointer', fontWeight: 600, fontSize: 14,
    background: active ? blue : 'transparent',
    color: active ? '#fff' : '#64748b',
    transition: 'all .15s'
  }}>
    <Icon size={19} /> {label}
  </div>
)

/* ── chart date labels ───────────────────────────────────── */
const enrollData = [
  { l: 'May 18', v: 40 }, { l: 'May 22', v: 55 }, { l: 'May 26', v: 60 },
  { l: 'May 30', v: 70 }, { l: 'Jun 3', v: 90 }, { l: 'Jun 7', v: 180 },
  { l: 'Jun 11', v: 160 }, { l: 'Jun 15', v: 220 }
]
const revenueData = [
  { l: 'May 18', v: 80000 }, { l: 'May 22', v: 120000 }, { l: 'May 26', v: 90000 },
  { l: 'May 30', v: 150000 }, { l: 'Jun 3', v: 100000 }, { l: 'Jun 7', v: 200000 },
  { l: 'Jun 11', v: 170000 }, { l: 'Jun 15', v: 230000 }
]

import { useCourses } from '@/hooks/useCourses'
import { useCertificates } from '@/hooks/useCertificates'

/* ── MAIN COMPONENT ──────────────────────────────────────── */
export default function AdminDashboard() {
  const sanityClient = useClient({ apiVersion: '2024-06-17' })
  const [activeTab, setActiveTab] = useState('Dashboard')
  const [stats, setStats] = useState({ courses: 0, certificates: 0 })
  const { courses: realCourses, loading: coursesLoading } = useCourses()
  const { certificates } = useCertificates()

  const [enrollments, setEnrollments] = useState<any[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        const [courses, certs, initialEnrollments] = await Promise.all([
          sanityClient.fetch(`count(*[_type == "course"])`),
          sanityClient.fetch(`count(*[_type == "certificate"])`),
          sanityClient.fetch(`*[_type == "enrollment"] | order(_createdAt desc)`)
        ])
        setStats({ courses, certificates: certs })
        setEnrollments(initialEnrollments)
      } catch (e) { console.error(e) }
    })()

    const sub = sanityClient.listen('*[_type == "enrollment"]').subscribe((update: any) => {
      if (update.result) {
        setEnrollments(prev => {
          const newArr = [update.result, ...prev.filter(e => e._id !== update.result._id)]
          return newArr.sort((a,b) => new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime())
        })
      }
    })

    return () => sub.unsubscribe()
  }, [sanityClient])

  // Map real courses to dashboard format
  const topCourses = realCourses.slice(0, 4).map((c: any, i: number) => ({
    title: c.title,
    students: c.students || '100+',
    price: c.pricePKR ? `PKR ${c.pricePKR.toLocaleString()}` : (c.priceUSD ? `$${c.priceUSD}` : 'PKR 15,000'),
    color: ['#3b82f6', '#8b5cf6', '#22c55e', '#0f172a'][i % 4]
  }))

  const getTimeAgo = (date: string) => {
    const diff = (new Date().getTime() - new Date(date).getTime()) / 60000
    if (diff < 60) return `${Math.floor(diff)}m ago`
    if (diff < 1440) return `${Math.floor(diff / 60)}h ago`
    return `${Math.floor(diff / 1440)}d ago`
  }

  const handleApprove = async (id: string) => {
    try {
      await writeClient.patch(id).set({ status: 'Completed' }).commit()
    } catch (err) {
      console.error('Failed to approve', err)
    }
  }

  const uniqueStudentsMap = new Map()
  enrollments.forEach(e => {
    if (!uniqueStudentsMap.has(e.email)) {
      uniqueStudentsMap.set(e.email, {
        name: e.name,
        email: e.email,
        phone: e.phone,
        courses: 1,
        joined: new Date(e._createdAt).toLocaleDateString()
      })
    } else {
      uniqueStudentsMap.get(e.email).courses += 1
    }
  })
  const uniqueStudents = Array.from(uniqueStudentsMap.values())

  const completedPayments = enrollments.filter(e => e.status === 'Completed')

  const last7Days = Array.from({length: 7}).map((_, i) => {
    const d = new Date(); d.setDate(d.getDate() - (6 - i));
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  })
  
  const enrollData = last7Days.map(label => {
    const count = enrollments.filter(e => e._createdAt && new Date(e._createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) === label).length;
    return { l: label, v: count }
  })

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'Inter', -apple-system, sans-serif", background: '#f8fafc' }}>

      {/* ══════════════ SIDEBAR ══════════════ */}
      <aside style={{
        width: 240, background: '#fff', borderRight: '1px solid #e2e8f0',
        display: 'flex', flexDirection: 'column', padding: '28px 14px 20px',
        position: 'sticky', top: 0, height: '100vh', overflowY: 'hidden'
      }}>
        {/* Logo */}
        <div style={{ padding: '0 8px 28px', fontWeight: 800, fontSize: 18, color: blue }}>
          Neotech <span style={{ color: '#0f172a' }}>Solutions</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
          <SideLink icon={LayoutDashboard} label="Dashboard" active={activeTab === 'Dashboard'} onClick={() => setActiveTab('Dashboard')} />
          <SideLink icon={BookOpen}         label="Courses" active={activeTab === 'Courses'} onClick={() => setActiveTab('Courses')} />
          <SideLink icon={Award}            label="Certificates" active={activeTab === 'Certificates'} onClick={() => setActiveTab('Certificates')} />
          <SideLink icon={Users}            label="Students" active={activeTab === 'Students'} onClick={() => setActiveTab('Students')} />
          <SideLink icon={GraduationCap}    label="Enrollments" active={activeTab === 'Enrollments'} onClick={() => setActiveTab('Enrollments')} />
          <SideLink icon={CreditCard}       label="Payments" active={activeTab === 'Payments'} onClick={() => setActiveTab('Payments')} />
        </div>

        <div style={{ padding: '16px 8px 0', borderTop: '1px solid #e2e8f0', marginTop: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
          <HelpCircle size={18} color="#94a3b8" />
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#64748b' }}>Need Help?</div>
            <div style={{ fontSize: 12, color: blue, fontWeight: 600, cursor: 'pointer' }}>Contact Support</div>
          </div>
        </div>
      </aside>

      {/* ══════════════ MAIN ══════════════ */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>

        {/* ── Top Bar ── */}
        <header style={{
          background: '#fff', borderBottom: '1px solid #e2e8f0',
          padding: '14px 32px', display: 'flex', alignItems: 'center', gap: 16,
          position: 'sticky', top: 0, zIndex: 20
        }}>
          <div style={{
            flex: 1, display: 'flex', alignItems: 'center', gap: 10,
            background: '#f1f5f9', borderRadius: 12, padding: '10px 18px', maxWidth: 420
          }}>
            <Search size={18} color="#94a3b8" />
            <span style={{ color: '#94a3b8', fontSize: 14 }}>Search for courses, students, certificates...</span>
            <span style={{ marginLeft: 'auto', background: '#e2e8f0', borderRadius: 6, padding: '2px 10px', fontSize: 12, color: '#64748b', fontWeight: 600 }}>Ctrl+K</span>
          </div>
          <div style={{ position: 'relative', marginLeft: 'auto' }}>
            <Bell size={22} color="#64748b" />
            <div style={{ position: 'absolute', top: -3, right: -3, width: 9, height: 9, borderRadius: '50%', background: '#ef4444', border: '2px solid #fff' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginLeft: 8 }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: `linear-gradient(135deg, ${blue}, #818cf8)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 16 }}>A</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14, color: '#0f172a' }}>Admin</div>
              <div style={{ fontSize: 12, color: '#94a3b8' }}>Super Admin</div>
            </div>
            <ChevronDown size={16} color="#94a3b8" />
          </div>
        </header>

        {/* ── Content ── */}
        <div style={{ padding: '32px 36px', overflowY: 'auto' }}>

          {activeTab === 'Dashboard' && (
            <>
          <div style={{ marginBottom: 28 }}>
            <h1 style={{ fontSize: 28, fontWeight: 800, color: '#0f172a', margin: 0 }}>Dashboard</h1>
            <p style={{ color: '#64748b', fontSize: 15, margin: '4px 0 0' }}>Welcome back, Admin! Here's what's happening with your platform.</p>
          </div>

          {/* Stat Cards */}
          <div style={{ display: 'flex', gap: 20, marginBottom: 28 }}>
            <StatCard 
              icon={BookOpen}      
              iconBg={blue}   
              label="Total Courses"      
              value={realCourses.length || stats.courses || 0}  
              change="Active on platform" 
            />
            <StatCard 
              icon={Users}         
              iconBg={green}  
              label="Total Students"      
              value={uniqueStudents.length}
              change="Active registered students" 
            />
            <StatCard 
              icon={Award} 
              iconBg={purple} 
              label="Certificates Issued"  
              value={completedPayments.length}                  
              change="Successfully completed" 
            />
          </div>

          {/* Charts Row */}
          <div style={{ display: 'flex', gap: 20, marginBottom: 28 }}>
            {/* Enrollments Overview */}
            <div style={{ flex: 1, background: '#fff', borderRadius: 16, padding: 28, boxShadow: '0 1px 3px rgba(0,0,0,.06)', border: '1px solid #f0f0f5' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <div style={{ fontWeight: 700, fontSize: 16, color: '#0f172a' }}>Enrollments Overview</div>
                <button style={{ background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: 10, padding: '6px 14px', fontSize: 13, fontWeight: 600, color: '#475569', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
                  This Month <ChevronDown size={14} />
                </button>
              </div>
              <MiniLineChart data={enrollData} />
            </div>
          </div>

          {/* Bottom Row — 3 columns */}
          <div style={{ display: 'flex', gap: 20 }}>
            {/* Top Courses */}
            <div style={{ flex: 1, background: '#fff', borderRadius: 16, padding: 24, boxShadow: '0 1px 3px rgba(0,0,0,.06)', border: '1px solid #f0f0f5' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
                <div style={{ fontWeight: 700, fontSize: 16, color: '#0f172a' }}>Top Courses</div>
                <span onClick={() => setActiveTab('Courses')} style={{ fontSize: 13, color: blue, fontWeight: 600, cursor: 'pointer' }}>View All</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {topCourses.map((c, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 42, height: 42, borderRadius: 12, background: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <BookOpen size={20} color="#fff" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: 14, color: '#0f172a' }}>{c.title}</div>
                      <div style={{ fontSize: 12, color: '#94a3b8' }}>{c.students} Students</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontWeight: 700, fontSize: 13, color: '#0f172a' }}>{c.price}</div>
                      <span style={{ fontSize: 11, fontWeight: 600, color: green, background: green + '18', borderRadius: 6, padding: '2px 8px' }}>Active</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </>
          )}

          {activeTab === 'Courses' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h1 style={{ fontSize: 28, fontWeight: 800, color: '#0f172a', margin: 0 }}>All Courses</h1>
                  <p style={{ color: '#64748b', fontSize: 15, margin: '4px 0 0' }}>Manage and view all your platform's courses.</p>
                </div>
                <a href="/admin/intent/create/template=course;type=course/" style={{
                  background: blue, color: '#fff', border: 'none', borderRadius: 12,
                  padding: '10px 22px', fontWeight: 700, fontSize: 14, display: 'flex',
                  alignItems: 'center', gap: 8, cursor: 'pointer', textDecoration: 'none'
                }}>
                  <Plus size={18} /> Add New Course
                </a>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
                {realCourses.map((c: any, i: number) => (
                  <div key={i} style={{ background: '#fff', borderRadius: 16, padding: 20, boxShadow: '0 1px 3px rgba(0,0,0,.06)', border: '1px solid #f0f0f5', display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <div style={{ width: '100%', height: 160, borderRadius: 12, overflow: 'hidden', background: '#f1f5f9' }}>
                       {c.image && <img src={c.image} alt={c.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 16, color: '#0f172a', marginBottom: 4, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{c.title}</div>
                      <div style={{ fontSize: 13, color: '#64748b' }}>{c.students || '100+'} Students</div>
                    </div>
                    <div style={{ marginTop: 'auto', paddingTop: 12, borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                       <div style={{ fontWeight: 700, fontSize: 15, color: '#0f172a' }}>
                         {c.pricePKR ? `PKR ${c.pricePKR.toLocaleString()}` : (c.priceUSD ? `$${c.priceUSD}` : 'PKR 15,000')}
                       </div>
                       <a href={`/admin/intent/edit/id=${c._id};type=course/`} style={{ fontSize: 13, fontWeight: 600, color: blue, background: blue + '18', borderRadius: 6, padding: '4px 10px', textDecoration: 'none', cursor: 'pointer' }}>Edit</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'Certificates' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h1 style={{ fontSize: 28, fontWeight: 800, color: '#0f172a', margin: 0 }}>Certificates Library</h1>
                  <p style={{ color: '#64748b', fontSize: 15, margin: '4px 0 0' }}>Manage and view course completion certificates.</p>
                </div>
                <a href="/admin/intent/create/template=certificate;type=certificate/" style={{
                  background: blue, color: '#fff', border: 'none', borderRadius: 12,
                  padding: '10px 22px', fontWeight: 700, fontSize: 14, display: 'flex',
                  alignItems: 'center', gap: 8, cursor: 'pointer', textDecoration: 'none'
                }}>
                  <Plus size={18} /> Add New Certificate
                </a>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
                {certificates.map((c: any, i: number) => (
                  <div key={i} style={{ background: '#fff', borderRadius: 16, padding: 20, boxShadow: '0 1px 3px rgba(0,0,0,.06)', border: '1px solid #f0f0f5', display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <div style={{ width: '100%', height: 180, borderRadius: 12, overflow: 'hidden', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                       {c.certificateImage ? <img src={c.certificateImage} alt={c.courseName} style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> : <Award size={48} color="#94a3b8" opacity={0.5} />}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 16, color: '#0f172a', marginBottom: 4 }}>{c.courseName}</div>
                      <div style={{ fontSize: 13, color: '#64748b', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{c.courseInfo}</div>
                    </div>
                  </div>
                ))}
                {certificates.length === 0 && (
                   <div style={{ padding: 40, textAlign: 'center', color: '#94a3b8', gridColumn: '1 / -1', background: '#fff', borderRadius: 16, border: '1px solid #e2e8f0' }}>No certificates found.</div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'Students' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div>
                <h1 style={{ fontSize: 28, fontWeight: 800, color: '#0f172a', margin: 0 }}>Students CRM</h1>
                <p style={{ color: '#64748b', fontSize: 15, margin: '4px 0 0' }}>Manage your student records and activity.</p>
              </div>
              <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                      <th style={{ padding: '16px 24px', fontSize: 13, fontWeight: 600, color: '#64748b' }}>Name</th>
                      <th style={{ padding: '16px 24px', fontSize: 13, fontWeight: 600, color: '#64748b' }}>Email</th>
                      <th style={{ padding: '16px 24px', fontSize: 13, fontWeight: 600, color: '#64748b' }}>Phone</th>
                      <th style={{ padding: '16px 24px', fontSize: 13, fontWeight: 600, color: '#64748b' }}>Courses Enrolled</th>
                      <th style={{ padding: '16px 24px', fontSize: 13, fontWeight: 600, color: '#64748b' }}>Joined</th>
                    </tr>
                  </thead>
                  <tbody>
                    {uniqueStudents.map((s: any, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '16px 24px', fontSize: 14, fontWeight: 600, color: '#0f172a' }}>{s.name}</td>
                        <td style={{ padding: '16px 24px', fontSize: 14, color: '#475569' }}>{s.email}</td>
                        <td style={{ padding: '16px 24px', fontSize: 14, color: '#475569' }}>{s.phone}</td>
                        <td style={{ padding: '16px 24px', fontSize: 14, color: '#0f172a', fontWeight: 600 }}>{s.courses}</td>
                        <td style={{ padding: '16px 24px', fontSize: 14, color: '#94a3b8' }}>{s.joined}</td>
                      </tr>
                    ))}
                    {uniqueStudents.length === 0 && (
                      <tr><td colSpan={5} style={{ padding: 24, textAlign: 'center', color: '#94a3b8' }}>No students yet.</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'Enrollments' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div>
                <h1 style={{ fontSize: 28, fontWeight: 800, color: '#0f172a', margin: 0 }}>Enrollments</h1>
                <p style={{ color: '#64748b', fontSize: 15, margin: '4px 0 0' }}>Approve and manage course enrollments.</p>
              </div>
              <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                      <th style={{ padding: '16px 24px', fontSize: 13, fontWeight: 600, color: '#64748b' }}>Student</th>
                      <th style={{ padding: '16px 24px', fontSize: 13, fontWeight: 600, color: '#64748b' }}>Course</th>
                      <th style={{ padding: '16px 24px', fontSize: 13, fontWeight: 600, color: '#64748b' }}>Date</th>
                      <th style={{ padding: '16px 24px', fontSize: 13, fontWeight: 600, color: '#64748b' }}>Status</th>
                      <th style={{ padding: '16px 24px', fontSize: 13, fontWeight: 600, color: '#64748b', textAlign: 'right' }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {enrollments.map((e: any, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '16px 24px', fontSize: 14, fontWeight: 600, color: '#0f172a' }}>{e.name}<div style={{fontSize:12,color:'#94a3b8',fontWeight:400}}>{e.email}</div></td>
                        <td style={{ padding: '16px 24px', fontSize: 14, color: '#475569', fontWeight: 500 }}>{e.course}</td>
                        <td style={{ padding: '16px 24px', fontSize: 14, color: '#94a3b8' }}>{new Date(e._createdAt).toLocaleDateString()}</td>
                        <td style={{ padding: '16px 24px' }}>
                          <span style={{ fontSize: 12, fontWeight: 600, padding: '4px 10px', borderRadius: 20, 
                            background: e.status === 'Completed' ? green+'18' : orange+'18',
                            color: e.status === 'Completed' ? green : orange 
                          }}>
                            {e.status || 'Pending'}
                          </span>
                        </td>
                        <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                          {e.status !== 'Completed' && (
                            <button onClick={() => handleApprove(e._id)} style={{ background: blue, color: '#fff', border: 'none', borderRadius: 8, padding: '6px 14px', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                              Approve
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                    {enrollments.length === 0 && (
                      <tr><td colSpan={5} style={{ padding: 24, textAlign: 'center', color: '#94a3b8' }}>No enrollments yet.</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'Payments' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h1 style={{ fontSize: 28, fontWeight: 800, color: '#0f172a', margin: 0 }}>Payments Ledger</h1>
                  <p style={{ color: '#64748b', fontSize: 15, margin: '4px 0 0' }}>Track all incoming payments and revenue.</p>
                </div>
              </div>
              <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                      <th style={{ padding: '16px 24px', fontSize: 13, fontWeight: 600, color: '#64748b' }}>Txn ID</th>
                      <th style={{ padding: '16px 24px', fontSize: 13, fontWeight: 600, color: '#64748b' }}>Student</th>
                      <th style={{ padding: '16px 24px', fontSize: 13, fontWeight: 600, color: '#64748b' }}>Course</th>
                      <th style={{ padding: '16px 24px', fontSize: 13, fontWeight: 600, color: '#64748b' }}>Payment Date</th>
                      <th style={{ padding: '16px 24px', fontSize: 13, fontWeight: 600, color: '#64748b' }}>Method</th>
                    </tr>
                  </thead>
                  <tbody>
                    {completedPayments.map((e: any, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '16px 24px', fontSize: 14, fontFamily: 'monospace', color: '#64748b' }}>txn_{e._id.slice(-8)}</td>
                        <td style={{ padding: '16px 24px', fontSize: 14, fontWeight: 600, color: '#0f172a' }}>{e.name}</td>
                        <td style={{ padding: '16px 24px', fontSize: 14, color: '#475569' }}>{e.course}</td>
                        <td style={{ padding: '16px 24px', fontSize: 14, color: '#94a3b8' }}>{new Date(e._updatedAt || e._createdAt).toLocaleDateString()}</td>
                        <td style={{ padding: '16px 24px', fontSize: 14, color: '#0f172a' }}>{e.paymentFrequency === 'full' ? 'Full Payment' : 'Installment'}</td>
                      </tr>
                    ))}
                    {completedPayments.length === 0 && (
                      <tr><td colSpan={5} style={{ padding: 24, textAlign: 'center', color: '#94a3b8' }}>No completed payments yet.</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  )
}
