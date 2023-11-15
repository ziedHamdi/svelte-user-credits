export type PurchaseInfo = {orderId: string, intentSk: string}

export function load({params}): PurchaseInfo {
	const orderId = params["orderId"]
	const intentSk = params["intentSk"]

	return {orderId, intentSk}
}