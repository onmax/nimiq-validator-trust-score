import { Hono } from 'hono'
import { greeting } from 'vts-core'

const app = new Hono()

app.get('/', c => c.text(`${greeting}`))
export default app
