import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'd9m1wvck',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-06-17',
  token: 'skwmB478lonVxbx8X1RqPCG1lBjk2C798khQZvTh9PLAInqlqWc7o4R8j0tr9xf0V6qRRKVmHoGz0LetqT7RJa99KxOxtjoRpjTnfOTOnbbfHulzKTxkbx6K2nGVrQWgi1kHgUJzFgSkFhPi7mlWx0BVJTjdhKSQexqmgC4GerWGDryFADTK'
})

async function deleteEnrollments() {
  const query = `*[_type == "enrollment"]`
  const enrollments = await client.fetch(query)
  
  if (enrollments.length > 0) {
    for (const e of enrollments) {
      console.log('Deleting', e._id)
      await client.delete(e._id)
    }
    console.log('Deleted all enrollments')
  } else {
    console.log('No enrollments found')
  }
}

deleteEnrollments()
