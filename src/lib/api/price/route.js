import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { stripe } from '@/lib/stripe';
import { auth } from '@/lib/auth';




export async function POST(reqest) {
  const data = await req.json();

  // console.log(data);
  
  try {
    const headersList = await headers()
    const origin = headersList.get('origin')

    const userSession = await auth.api.getSession({
        headers: await headers()
    })
    const user = userSession?.user
    const formData = await reqest.formData();
    const price = formData.get('price')
    const title = formData.get('title')
    const ebookId = formData.get('ebookId')


    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
        customer_email:user?.email,
      line_items: [
        {
          // Provide the exact Price ID (for example, price_1234) of the product you want to sell
          price_data: {
            currency: "USD",
            unit_amount: Number(price) * 100,
            ebook_data: {
                name : title,
            }
          },
          quantity: 1,
        },
      ],
      metadata:{
        priceId: Number(price),
        userId: user.id,
        userEmail: user.email,
        title,
        ebookId,
      },
      mode: 'payment',
      success_url: `${origin}/payment_success?session_id={CHECKOUT_SESSION_ID}`,
    });
    // console.log(session);
    
    return NextResponse.json({url:session.url,})
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    )
  }
}




export async function GET(){
    return NextResponse.json({
        massage: "hello from subscription api route"
    })
}