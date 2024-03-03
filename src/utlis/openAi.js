import OpenAI from 'openai';
import { OPENAI_KEY } from './contant';

const openai = new OpenAI({
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true,
//   apiKey: process.env['OPENAI_API_KEY'],
});
export default openai;