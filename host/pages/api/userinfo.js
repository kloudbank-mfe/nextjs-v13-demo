import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'json');
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + '/userinfo.json', 'utf8');
  // Add key property
  const updatedList = JSON.parse(fileContents).map((item, idx) => ({
    ...item,
    key: idx+1,
  }));
  //Return the content of the data file in json format
  res.status(200).json(updatedList);
}
