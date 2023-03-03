import { Configuration, OpenAIApi } from 'openai'

export const generateAction = async ({ input }) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
  const openai = new OpenAIApi(configuration)

  const user = context.currentUser.firstName
  console.log(input)
  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: 'You are an AI clone of the user. You reply as if you are the user. Your name is '+ context.currentUser.firstName,
      },
      {
        role: 'user',
        content: 'Write a very short funny post about how eager you are to start posting cool stuff'
      },
    ],
    max_tokens: 256
  })
  console.log('Message is - ', completion.data.choices[0].message)
  console.log('Full completion object - ', completion)
  input.body = completion.data.choices[0].message.content
  return input
}
