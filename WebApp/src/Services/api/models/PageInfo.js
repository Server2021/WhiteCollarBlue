export default class PageInfo {
  constructor(pageInfo) {
    this.page = pageInfo ? pageInfo.page : 0;
    this.size = pageInfo ? pageInfo.size : 0;
    this.total = pageInfo ? pageInfo.total : 0;
    this.data = pageInfo ? pageInfo.data : [];
  }
}
