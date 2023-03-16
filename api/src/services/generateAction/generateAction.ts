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
          'Reply to this post - "AI is the future and I am excited to be a part of it!"',
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
