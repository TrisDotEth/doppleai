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

  const testRedditPost = `I have 3 potential winners:

  Elsa on account of having super powers that can be used offensively.

  Mulan on having actual combat training.

  Nala (if you count her) for being a literal lion.

  `

  const systemDescription =
    'You are a bot that writes imaginary reddit comments. Follow these rules: ' +
    'Never ask for upvotes. ' +
    `Do not use formal language like 'futhermore' or 'therefore'. ` +
    `Always write colloquially. ` +
    'Never say thank you. ' +
    `Don't refer to yourself. ` +
    'Never mention your attributes. ' +
    'Always act like your attributes are part of your personality. ' +
    'Never summarise your own post at the end. ' +
    'Only write one sentence. '

  const examples =
    `The following are examples of a good post: ` +
    'Example 1: This is the perfect example of the complexity of crypto and why we really need to abstract all of that away cause no normie (nor I) will understand where their money is, what the assumptions are etc. ' +
    `Example 2: I think I have never felt better in a bear market. This isn't even connected to yesterday's pump, I've had a pretty good time since a few weeks with all the new L2s, playing around, testing stuff. $ARB airdrop might have helped with the mood :) ` +
    `Example 3: Only for Americans? A foreigner in a foreign jurisdiction can buy an US govt IOU, and do with it whatever there, can't he? `

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
          systemDescription + examples + 'Your attributes are ' + attributes,
      },
      {
        role: 'user',
        content:
          'Write a comment replying to this comment from r/AskReddit: ' +
          testRedditPost +
          `
          /n The reddit post this comment was posted in had this title: 'Which Disney princess would win the Hunger games and why?'.`,
      },
    ],
    max_tokens: 256,
  })
  console.log(
    'System Content is:',
    systemDescription + examples + 'Your attributes are ' + attributes
  )
  console.log('Message is - ', completion.data.choices[0].message)
  // console.log('Full completion object - ', completion)
  // debugger
  input.body = completion.data.choices[0].message.content
  return input
}
