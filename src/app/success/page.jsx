
import SuccessPaymentPage from '@/components/PaymentSucces'
import { subscription } from '@/lib/action/payment'
import { stripe } from '@/lib/stripe'
import { redirect } from 'next/navigation'



export default async function Success({ searchParams }) {
  const { session_id } = await searchParams


  if (!session_id)
    throw new Error('Please provide a valid session_id (`cs_test_...`)')

  const {
    status,
    metadata,
    customer_details: { email: customerEmail }
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent']
  })

  if (status === 'open') {
    return redirect('/')
  }

  if (status === 'complete') {
    // console.log("Metadata:", metadata);

    await subscription({ ...metadata, sessionId: session_id })

    // extra ai
    await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/PurchasedNow`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: metadata.userId,
        ebookId: metadata.ebookId,
        ebookTitle: metadata.ebookTitle,   
        description: metadata.description,  
        image: metadata.image,
        price: metadata.price,
        sessionId: session_id,
      }),
    });



    return (
      <section id="success">
        <SuccessPaymentPage></SuccessPaymentPage>
      </section>
    )
  }
}


