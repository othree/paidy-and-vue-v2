const data = {
  amount: 14000,
  description: "Description",
  store_name: "Apparel Shop",
  order: {
    tax: 0.0,
    shipping: 0.0,
    order_ref: "test4",
    items: [
      {
        id: "item_id",
        title: "zzz",
        description: "三匹の猫シャツ",
        unit_price: 9000, // if this price surpass 50% of the amount && title is in the blacklist the form will be transformed to the extended version
        quantity: 1,
      },
      {
        id: "item_id",
        title: "三匹の猫シャツ",
        description: "三匹の猫シャツ",
        unit_price: 5000,
        quantity: 1,
      },
    ],
  },
  currency: "JPY",
  buyer: {
    name1: "パンコ 聖羅",
    name2: "パンコ セイ",
    dob: "1992-10-30",
    email: "successful.payment@paidy.com",
    phone: "818000000001",
  },
  shipping_address: {
    line1: "1-7-1",
    line2: "六本木",
    city: "橿原市",
    state: "奈良県",
    zip: "7676763",
  },
};

export default data;
