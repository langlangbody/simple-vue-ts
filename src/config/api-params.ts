let key_str = () =>{
  let Api_key
  if (process.env.NODE_ENV === 'development') {
    Api_key='test_a724462b7f2694f53631ac1c445908b7'
   }else{
    // Api_key='test_a724462b7f2694f53631ac1c445908b7'
    Api_key = 'live_a724462b7f2694f53631ac1c445908b7'
   }
   return Api_key
}

let Api_key_str = key_str()

export default Api_key_str