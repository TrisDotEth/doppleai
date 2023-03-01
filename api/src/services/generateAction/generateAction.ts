import { Configuration, OpenAIApi } from 'openai'

export const generateAction = async ({ input }) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
  const openai = new OpenAIApi(configuration)

  console.log(input)
  const completion = await openai.createCompletion({
    model: 'text-davinci-002',
    prompt:
      'Write a short facebook post celebrating writing great code. You have these atrributes: Name: Tris, Sex: Male, Age: 35',
  })
  console.log(completion.data.choices[0].text)
  input.body = completion.data.choices[0].text
  return input
}
