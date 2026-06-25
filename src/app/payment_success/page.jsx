import { stripe } from '@/lib/stripe'
import { redirect } from 'next/navigation'

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams

  if (!session_id) {
    throw new Error('Please provide a valid session_id')
  }

  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent']
  })

  if (session.status === 'open') {
    return redirect('/')
  }

  if (session.status === 'complete') {

    const paymentData = {
      sessionId: session.id,
      transactionId: session.payment_intent.id,
      customerEmail: session.customer_details?.email,
      amount: session.amount_total / 100,
      paymentStatus: session.payment_status,
      ebookId: session.metadata?.ebookId,
      purchasedAt: new Date(),
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/payments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
      cache: 'no-store',
    })

    const result = await res.json()

    console.log(result)

    return (
      <section id="success">
        <h1>Payment Success</h1>
      </section>
    )
  }
}