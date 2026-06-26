import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { stripe } from '@/lib/stripe';
import { auth } from '@/lib/auth';




export async function POST(req) {
  const data = await req.json();

  // console.log(data);

  try {
    const headersList = await headers()
    const origin = headersList.get('origin')

    const userSession = await auth.api.getSession({
      headers: await headers()
    })
    const user = userSession?.user


    const PRICE_ID = "price_1Tl9VcR6vcdNysqfSlkusptJ"

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      customer_email: user?.email,
      line_items: [
        {
          // Provide the exact Price ID (for example, price_1234) of the product you want to sell
          price: PRICE_ID,
          quantity: 1,
        },
      ],
      metadata: {
        priceId: PRICE_ID,
        userId: user.id,
        userEmail: user.email,

        ebookId: data.ebookId || data._id,
        ebookTitle: data.title,
        writer_name: data.writer_name,
        description: data.description,
        image: data.image,
        price: data.price,
      },
      mode: 'subscription',
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    });
    // console.log(session);


    return NextResponse.json({ url: session.url, })
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    )
  }
}




export async function GET() {
  return NextResponse.json({
    massage: "hello from subscription api route"
  })
}