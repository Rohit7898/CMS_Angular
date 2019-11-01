export interface Cart{
    orderId: number,
    itemID:number,
	itemName:String,
	quantity:number,
	date: Date,
    vendorName: String,
	totalPrice: number,
    status: number,
}