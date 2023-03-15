import { Configuration, OpenAIApi } from 'openai'

export const generateAction = async ({ input }) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
  const openai = new OpenAIApi(configuration)

  const user = context.currentUser.firstName
  console.log(input)
  // debugger
  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: 'You are an AI clone of the user.',
      },
      {
        role: 'user',
        content:
          'You are fun and irreverent. Write a short facebook post, that has no hashtags, pontificating about the world.',
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
