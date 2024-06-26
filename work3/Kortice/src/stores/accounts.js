import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useAccountsStore = defineStore('accounts', ()=>{
  // 数据
  const accounts = reactive([])

  // 方法

  // 添加用户信息
  const addAccount = newAccount => {
    accounts.unshift(newAccount)
    console.log(accounts)
  }

  // 返回相关的数据
  return {
    accounts,
    addAccount,
  }

},{
  persist:true
})
