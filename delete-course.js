import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'd9m1wvck',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-06-17',
  token: 'skwmB478lonVxbx8X1RqPCG1lBjk2C798khQZvTh9PLAInqlqWc7o4R8j0tr9xf0V6qRRKVmHoGz0LetqT7RJa99KxOxtjoRpjTnfOTOnbbfHulzKTxkbx6K2nGVrQWgi1kHgUJzFgSkFhPi7mlWx0BVJTjdhKSQexqmgC4GerWGDryFADTK'
})

async function deleteAnasIrfan() {
  const query = `*[_type == "course" && title match "anas irfan"]`
  const courses = await client.fetch(query)
  
  if (courses.length > 0) {
    for (const c of courses) {
      console.log('Deleting', c._id)
      await client.delete(c._id)
    }
    console.log('Deleted all anas irfan courses')
  } else {
    console.log('No such course found')
  }
}

deleteAnasIrfan()
