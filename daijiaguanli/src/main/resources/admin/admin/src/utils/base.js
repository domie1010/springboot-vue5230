const base = {
    get() {
        return {
            url : "http://localhost:8080/daijiaguanli/",
            name: "daijiaguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/daijiaguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "辽B代驾管理系统"
        } 
    }
}
export default base
