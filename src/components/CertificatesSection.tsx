import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { useCourses } from "@/hooks/useCourses";

const CertificatesSection = () => {
  // Re-purposed to display Certificates for completed courses
  const { courses } = useCourses();
  const [open, setOpen] = useState(false);
  const [activeCourse, setActiveCourse] = useState<any>(null);

  const handleView = (course: any) => {
    setActiveCourse(course);
    setOpen(true);
  };

  const downloadCertificate = (course: any) => {
    const win = window.open('', '_blank');
    if (!win) return;
    let html = '';
    if (course.title && course.title.includes("Full Stack AI")) {
      html = `
        <html>
          <head>
            <title>Certificate - ${course.title}</title>
            <style>
              body{display:flex;align-items:center;justify-content:center;height:100vh;margin:0;background:#f3f6ff}
              img{max-width:100%;max-height:100vh;object-fit:contain;}
            </style>
          </head>
          <body>
            <img src="/FullstackaiCertificateupdated.png" alt="Certificate" />
          </body>
        </html>
      `;
    } else {
      html = `
        <html>
          <head>
            <title>Certificate - ${course.title}</title>
            <style>
              body{display:flex;align-items:center;justify-content:center;height:100vh;margin:0;background:#f3f6ff}
              .cert{width:900px;height:600px;border:16px solid #0ea5e9;border-radius:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:white;font-family:Arial}
              .logo{font-weight:800;color:#0b5ed7;margin-bottom:8px}
              .title{font-size:28px;font-weight:700;margin:12px 0}
              .subtitle{color:#6b7280;margin-bottom:24px}
              .name{font-size:22px;font-weight:700;margin:8px 0}
              .meta{color:#374151;margin-top:24px}
            </style>
          </head>
          <body>
            <div class="cert">
              <div class="logo">Neotech Solutions</div>
              <div class="title">Certificate of Completion</div>
              <div class="subtitle">This certificate is proudly presented to</div>
              <div class="name">[Student Name]</div>
              <div class="subtitle">for successfully completing the course</div>
              <div class="name">${course.title}</div>
              <div class="meta">Date: ${new Date().toLocaleDateString()}</div>
            </div>
          </body>
        </html>
      `;
    }
    win.document.write(html);
    win.document.close();
    win.focus();
    // give the browser a moment to render, then trigger print dialog for saving
    setTimeout(() => { win.print(); }, 500);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Certificates</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">These are the official certificates we provide to students upon successful completion of their courses. Click a certificate to preview or download.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course: any) => (
            <Card key={course.id} className="rounded-2xl border p-0 overflow-hidden">
              <CardHeader className="p-6">
                <CardTitle className="text-lg font-bold">{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 flex flex-col gap-4">
                <p className="text-sm text-slate-500 line-clamp-3">{course.description || course.title}</p>
                <div className="flex gap-3 mt-auto">
                  <Button onClick={() => handleView(course)} className="rounded-xl">Preview</Button>
                  <Button onClick={() => downloadCertificate(course)} className="rounded-xl" variant="secondary">Download</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-3xl p-0 overflow-hidden">
            <DialogHeader className="p-6">
              <DialogTitle>{activeCourse?.title} — Certificate Preview</DialogTitle>
            </DialogHeader>
            <div className="p-6 bg-gray-50">
              {activeCourse?.title?.includes("Full Stack AI") ? (
                <div className="mx-auto flex flex-col items-center justify-center">
                  <img src="/FullstackaiCertificateupdated.png" alt="Full Stack AI Certificate" className="w-[820px] h-auto object-contain rounded-lg shadow-sm" />
                </div>
              ) : (
                <div className="mx-auto w-[820px] h-[540px] bg-white border-8 border-sky-300 rounded-lg flex flex-col items-center justify-center">
                  <div className="text-2xl font-extrabold text-slate-900">Neotech Solutions</div>
                  <div className="mt-4 text-xl font-semibold">Certificate of Completion</div>
                  <div className="mt-6 text-sm text-slate-600">Awarded to</div>
                  <div className="mt-2 text-2xl font-bold">[Student Name]</div>
                  <div className="mt-6 text-base">For successfully completing the course</div>
                  <div className="mt-2 text-xl font-semibold">{activeCourse?.title}</div>
                  <div className="mt-6 text-sm text-slate-500">Date: {new Date().toLocaleDateString()}</div>
                </div>
              )}
              <div className="mt-4 flex justify-end gap-3">
                <Button onClick={() => activeCourse && downloadCertificate(activeCourse)}>Print / Download</Button>
                <Button variant="ghost" onClick={() => setOpen(false)}>Close</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default CertificatesSection;
