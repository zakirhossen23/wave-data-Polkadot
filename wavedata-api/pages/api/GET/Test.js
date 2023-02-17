
import {Buffer} from "node:buffer";
export default async function handler(req, res) {
	try {
		let FixCors = await import("../../../contract/fixCors.js");
		await FixCors.default(res);
	} catch (error) {}
	let useContract = await import("../../../contract/useContract.ts");
    let ecoded = 'CjIwMjEtMDgtMjYKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkNhcnluNDkKIGlzIGEgMzEgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIGZlbWFsZS4gUGF0aWVudCBoYXMgYSBoaXN0b3J5IG9mIGZhdGlndWUgKGZpbmRpbmcpLCBhY3V0ZSB2aXJhbCBwaGFyeW5naXRpcyAoZGlzb3JkZXIpLCBzdXNwZWN0ZWQgY292aWQtMTksIGNvdmlkLTE5LCBub3JtYWwgcHJlZ25hbmN5LCBhY3V0ZSBicm9uY2hpdGlzIChkaXNvcmRlciksIGZldmVyIChmaW5kaW5nKSwgcHJlZWNsYW1wc2lhLCBlc2NoZXJpY2hpYSBjb2xpIHVyaW5hcnkgdHJhY3QgaW5mZWN0aW9uLCBhbmVtaWEgKGRpc29yZGVyKSwgY291Z2ggKGZpbmRpbmcpLCBsb3NzIG9mIHRhc3RlIChmaW5kaW5nKSwgc3RyZXNzIChmaW5kaW5nKSwgc29jaWFsIGlzb2xhdGlvbiAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIE5PIElOU1VSQU5DRS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKYWNldGFtaW5vcGhlbiAzMjUgbWcgb3JhbCB0YWJsZXQ7IG5pdHJvZnVyYW50b2luIDUgbWcvbWwgb3JhbCBzdXNwZW5zaW9uOyBwaGVuYXpvcHlyaWRpbmUgaHlkcm9jaGxvcmlkZSAxMDAgbWcgb3JhbCB0YWJsZXQ7IGV0b25vZ2VzdHJlbCA2OCBtZyBkcnVnIGltcGxhbnQ7IGpvbGl2ZXR0ZSAyOCBkYXkgcGFjazsgbGV2b3JhIDAuMTUvMzAgMjggZGF5IHBhY2sKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBmb2xsb3dpbmcgcHJvY2VkdXJlcyB3ZXJlIGNvbmR1Y3RlZDoKLSBzdHJlcHRvY29jY3VzIHBuZXVtb25pYWUgZ3JvdXAgYiBhbnRpZ2VuIHRlc3QKLSBldmFsdWF0aW9uIG9mIHV0ZXJpbmUgZnVuZGFsIGhlaWdodAotIGF1c2N1bHRhdGlvbiBvZiB0aGUgZmV0YWwgaGVhcnQK';
    let output = useContract.base64DecodeUnicode(ecoded);


	res.status(200).json({value: output});
}

