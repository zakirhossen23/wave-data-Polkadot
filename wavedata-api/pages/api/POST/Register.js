import {ethers} from "ethers";
import wearableinfo from "../../../contract/wearableinfo.json";
export async function GenerateAccessToken(fullname) {
	var myHeaders = new Headers();
	myHeaders.append("AppAuthorization", wearableinfo.AppAuthorization);
	myHeaders.append("Content-Type", wearableinfo["Content-Type"]);
	myHeaders.append("Authorization", wearableinfo.Authorization);
	let uniqueName = fullname.toLowerCase().trim() + Math.floor(Math.random() * Date.now()).toString(16);

	var urlencoded = new URLSearchParams();
	urlencoded.append("partnerUserID", uniqueName);
	urlencoded.append("language", "en");

	var requestOptions = {
		method: "POST",
		headers: myHeaders,
		body: urlencoded,
		redirect: "follow"
	};

	let accessToken = await (await fetch("https://api.und-gesund.de/v5/accessToken", requestOptions)).text();
	return "daf69cba6bb256a687c8c73e229f54d3";
}
export default async function handler(req, res) {
	try {
		let FixCors = await import("../../../contract/fixCors.js");
		await FixCors.default(res);
	} catch (error) {}

	let useContract = await import("../../../contract/useContract.ts");
	let {contract, signerAddress} = await useContract.default();

	if (req.method !== "POST") {
		res.status(405).json({status: 405, error: "Register must have POST request"});
		return;
	}
	const {fullname, email, password} = req.body;
	if ((await contract.CheckEmail(email).call()) !== "False") {
		res.status(403).json({status: 403, error: "Account already exists!"});
		return;
	}
	let accessToken = await GenerateAccessToken(fullname);

	await contract.CreateAccount(fullname, email, password, accessToken).send({
		from: signerAddress,
		gasLimit: 6000000,
		gasPrice: ethers.utils.parseUnits("9.0", "gwei")
	});
	res.status(200).json({status: 200, value: "Registered!"});
}

