import { ethers } from 'ethers';
export default async function handler(req, res) {
  try {
    let FixCors = await import("../../../../../contract/fixCors.js");
    await FixCors.default(res);
  } catch (error) {}


  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  let useContract = await import("../../../../../contract/useContract.ts");
  let { contract, signerAddress } = await useContract.default();

  if (req.method !== 'POST') {
    res.status(405).json({ status: 405, error: "Method must have POST request" })
    return;
  }
  const data =Object.keys(req.body)[0];
  let alldata = JSON.parse(data);
  
  for (let i = 0; i < alldata.length; i++) {
    const item = alldata[i];
    const { trialid,userid,surveyid, sectionid,questionid ,answer  } = item;
    await contract.CreateQuestionAnswer(Number(trialid),Number(userid),Number(surveyid),sectionid,questionid ,answer ).send({
      from:signerAddress,
      gasLimit: 6000000,
      gasPrice: ethers.utils.parseUnits('9.0', 'gwei')
    });   
    await sleep(1000);
  }

 
  res.status(200).json({ status: 200, value: "Created" })

}
