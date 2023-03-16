import { Configuration, OpenAIApi } from 'openai'

type GenerateActionInput = {
  input: any
  profile?: any
}

export const generateAction = async ({
  input,
  profile,
}: GenerateActionInput) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
  const openai = new OpenAIApi(configuration)

  let attributes = ''
  if (profile) {
    console.log('profile is - ', profile)
    attributes = profile.attributes
      .map((value) => value.attribute.toString())
      .join(', ')
    console.log('ATTRIBUTES are - ', attributes)
  }
  console.log('input is - ', input)
  // debugger
  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content:
          'Your attributes are ' +
          attributes +
          '. You write facebook posts that are short and to the point, that have no hashtags, acting like your attributes',
      },
      {
        role: 'user',
        content:
          'Reply to this post - "So its raining today, and I got a scam message… so I wrote a script to spam them with fake passwords. Sending them about 14 a second currently"',
      },
    ],
    max_tokens: 256,
  })
  console.log('Message is - ', completion.data.choices[0].message)
  // console.log('Full completion object - ', completion)
  // debugger
  input.body = completion.data.choices[0].message.content
  return input
}
