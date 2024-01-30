export default {
  state: {
    isCollapse: false, // 用于控制菜单的展开还是收起
    tabsList: [        // 面包屑的数据
      {
        path: "/",
        name: "home",
        label: "首页",
        icon: "s-home",
        url: "Home/Home"
      },
      {
        path: "/mall",
        name: "mall",
        label: "商品管理",
        icon: "video-play",
        url: "MallManage/MallManage"
      },
      {
        path: "/user",
        name: "user",
        label: "用户管理",
        icon: "user",
        url: "UserManage/UserManage"
      },
      {
        label: "其他",
        icon: "location",
        children: [
          {
            path: "/page1",
            name: "page1",
            label: "页面1",
            icon: "setting",
            url: "Other/PageOne"
          },
          {
            path: "/page2",
            name: "page2",
            label: "页面2",
            icon: "setting",
            url: "Other/PageTwo"
          }
        ]
      }
    ]
  },
  mutations: {
    /**
     * 修改菜单展开收起的方法
     */
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    },
    /**
     * 更新面包屑数据
     */ 
    selectMenu(state, val) {
      console.log(val, "val")
      // 判断添加的数据是否为首页
      if (val.name !== "home") {
        const index = state.tabsList.findIndex(
          (item) => item.name === val.name
        )
        // 如果不存在
        if (index === -1) {
          state.tabsList.push(val)
        }
      }
    }
  }
}
