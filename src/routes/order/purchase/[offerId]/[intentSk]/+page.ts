export type PurchaseInfo = {offerId: string, intentSk: string}

export function load({params}): PurchaseInfo {
	const offerId = params["offerId"]
	const intentSk = params["intentSk"]

	return {offerId, intentSk}
}