let arr = ['aleksandre', 'dzukaevi', 'Rokushava', 'Gio', 'goga', 'Vano', 'bano', 'LAno', 'ALEKSandre']

for (let i = 0; i<arr.length; i++) {
    if (arr[i][0] === arr[i][0].toUpperCase()) {
        arr.splice(i, 1)
    }else if (arr[i]===arr[i].toUpperCase() && arr[i]===arr[-1]) {
        arr.pop(-1)
    }
}

console.log(arr)
// 6)შექმენით სია შეიყვანეთ user-ების სახელი და გვარი თუ user-ების სახელი და გვრი იწყება პატარა ასოთი slice-მეთოდის გამოყენებით ამოშალეთ ასეთი სახელები და გვარები სიიდან