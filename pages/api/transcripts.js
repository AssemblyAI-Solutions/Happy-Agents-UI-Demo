export const config = {
  api: {
      responseLimit: false,
  },
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createClient } from '@supabase/supabase-js'
export default async function handler(req, res) {
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY)
  const { data, error } = await supabase
  .from('demo')
  .select('*')
  .eq('demo_name', 'yuma_energy')
  .order('created_at', { ascending: true })
  .limit(20)

  res.status(200).json({ data, error })
}

// Example response
// data : [{
//   "id": 23,
//   "transcript_id": "674vxeq6tz-7a80-4779-aeb9-f45a552698eb",
//   "created_at": "2023-07-18T19:25:13.342398+00:00",
//   "url": null,
//   "basic_summary": "• Prospect needs: Looking to install solar for $250/month electricity bill. Owns double story house with colorbond roof and ducted air conditioning. Not planning to move for 1-2 years.\n\n• Call outcome: Scheduled a free in-home assessment for Tuesday at 5:30pm to review solar options and provide a quote. Encouraged prospect to get other quotes as well. \n\n• Next steps: Prospect will receive email confirmation with calendar invite for the appointment. Salesperson Stephen Rigby will conduct the in-home assessment.",
//   "coaching": "Greeting: You did not explicitly thank the customer for choosing your services. You could improve by starting the call with \"Thank you for your interest in Yuma Energy, Mr. Coventry.\"\n\nAgent Name: You introduced yourself clearly as \"Dave\" from Yuma Energy. Well done.\n\nOffer Help: You asked open-ended questions to determine how you could assist the customer, e.g. \"So, mate, what I'd like to do is organize maybe someone to come out to the property, sit down with you and your wife for that time and basically just go through everything we can do.\" This was effective.\n\nAssuming the Visit: You assumed the customer would want an in-home visit and offered dates and times, rather than inviting them to schedule an appointment. You could improve by saying something like \"Would you be interested in scheduling an in-home assessment so we can evaluate if solar would be suitable for your needs?\"\n\nOvercoming Objections: You did not explicitly ask open-ended questions to address objections. For example, you could have said \"What concerns do you have about switching to solar energy?\" to uncover any objections, followed by targeted responses. This is an area for improvement.",
//   "action_items": null,
//   "question_answers": "Question 1: Is the prospect the homeowner?\nYes\n\nQuestion 2: Are the power bills over $300?\nYes\n\nQuestion 3: Is the roof suitable for solar?\nYes\n\nQuestion 4: Is the prospect planning to move within the next 2 years?\nNo\n\nQuestion 5: Are all the key decision makers present on the call?\nNo\n\nQuestion 1: Is the prospect working over 30 hours per week?\nYes\n\nQuestion 2: Did the prospect book an appointment within 2 - 4 days?\nYes\n\nQuestion 3: Determine the sentiment of the prospect, the sales agent, and the overall call based on the text provided.\nOverall Call: Positive, the call was friendly and productive.\nProspect: Positive, the prospect was engaged and interested.\nSales Agent: Positive, the sales agent was friendly, helpful and built rapport.\n\nQuestion 4: Is the prospect ready to buy?\nYes, the prospect booked an appointment to discuss pricing and financing.\n\nQuestion 5: What is the likelihood that this prospect will turn into a customer?\nHigh, the prospect booked an appointment to discuss pricing and financing.\n\n",
//   "agent_name": "",
//   "demo_name": "yuma_energy",
//   "custom_summary": null,
//   "file_name": "David_B___Paddy_C",
//   "custom_components": null
// }]