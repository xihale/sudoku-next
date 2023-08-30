class DancingLinks {
  private static readonly Max = 3600;
  private static readonly ansMax = 9 * 9 + 6;

  private nd: { u: number; d: number; l: number; r: number }[] = new Array(
    DancingLinks.Max
  );
  // .fill({ u: 0, d: 0, l: 0, r: 0 }); // 赋值是地址...
  private first: number[] = new Array(DancingLinks.Max);
  private siz: number[] = new Array(DancingLinks.Max);
  private col: number[] = new Array(DancingLinks.Max);
  private cnt = 0;
  private row: number[] = new Array(DancingLinks.Max);
  private stk: number[] = new Array(DancingLinks.ansMax);

  private ans:number[][];

  constructor(ans:number[][]) {
    this.ans=ans;
  }

  private remove(c: number): void {
    this.nd[this.nd[c].l].r = this.nd[c].r;
    this.nd[this.nd[c].r].l = this.nd[c].l;
    for (let u = this.nd[c].d; u !== c; u = this.nd[u].d) {
      for (let v = this.nd[u].l; v !== u; v = this.nd[v].l) {
        this.nd[this.nd[v].d].u = this.nd[v].u;
        this.nd[this.nd[v].u].d = this.nd[v].d;
        this.siz[this.col[v]]--;
      }
    }
  }

  private recover(c: number): void {
    this.nd[this.nd[c].l].r = c;
    this.nd[this.nd[c].r].l = c;
    for (let u = this.nd[c].d; u !== c; u = this.nd[u].d) {
      for (let v = this.nd[u].l; v !== u; v = this.nd[v].l) {
        this.nd[this.nd[v].d].u = v;
        this.nd[this.nd[v].u].d = v;
        this.siz[this.col[v]]++;
      }
    }
  }

  private _insert(r: number, c: number): void {
    this.col[++this.cnt] = c;
    this.row[this.cnt] = r;
    this.siz[c]++;

    this.nd[this.cnt].d = this.nd[c].d;
    this.nd[this.nd[c].d].u = this.cnt;
    this.nd[c].d = this.cnt;
    this.nd[this.cnt].u = c;

    if (!this.first[r]) {
      this.first[r] = this.nd[this.cnt].l = this.nd[this.cnt].r = this.cnt;
    } else {
      (this.nd[this.cnt].r = this.nd[this.first[r]].r),
        (this.nd[this.nd[this.first[r]].r].l = this.cnt);
      (this.nd[this.cnt].l = this.first[r]),
        (this.nd[this.first[r]].r = this.cnt);
    }
  }

  public static readonly r = 729;
  public static readonly c = 324;

  public build(map:number[][]): void {
    for (let i = 0; i <= DancingLinks.Max; i++) { // 动态初始化 
      this.nd[i] = { u: 0, d: 0, l: 0, r: 0 };
      this.first[i]=0, this.siz[i]=0;
    }
    for (let i = 0; i <= DancingLinks.c; ++i) {
      this.nd[i] = { u: i, d: i, l: i - 1, r: i + 1 };
    }
    this.nd[0].l = DancingLinks.c;
    this.nd[(this.cnt = DancingLinks.c)].r = 0;
    for (let i = 0; i < 9; ++i) {
      for (let j = 0; j < 9; ++j) {
        if (!map[i][j]) for (let k = 1; k <= 9; ++k) this.insert(i, j, k);
        else this.insert(i, j, map[i][j]);
      }
    }
  }

  public insert(r: number, c: number, v: number): void {
    const pos = r * 81 + c * 9 + v;
    this._insert(pos, r * 9 + v);
    this._insert(pos, 81 * 1 + c * 9 + v);
    this._insert(
      pos,
      81 * 2 + Math.floor(r / 3) * 27 + Math.floor(c / 3) * 9 + v
    );
    this._insert(pos, 81 * 3 + r * 9 + c + 1);
  }
  public solve(dep: number): boolean {
    let u = this.nd[0].l;
    let v: number;
    let c = u;
    if (!u) {
      for (let i = 1; i < dep; ++i)
        this.ans[Math.floor((this.stk[i] - 1) / 81)][
          Math.floor((this.stk[i] - 1) / 9) % 9
        ] = ((this.stk[i] - 1) % 9) + 1;
      return true;
    }
    while (u) {
      if (this.siz[c] > this.siz[u]) c = u;
      u = this.nd[u].l;
    }
    this.remove(c);
    for (u = this.nd[c].d; u !== c; u = this.nd[u].d) {
      this.stk[dep] = this.row[u];
      for (v = this.nd[u].l; v !== u; v = this.nd[v].l) {
        this.remove(this.col[v]);
      }
      if (this.solve(dep + 1)) return true;
      for (v = this.nd[u].l; v !== u; v = this.nd[v].l) {
        this.recover(this.col[v]);
      }
    }
    this.recover(c);
    return false;
  }
}

export default DancingLinks;

// const map: number[][] = [];

// var map = [
//   [8, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 3, 6, 0, 0, 0, 0, 0],
//   [0, 7, 0, 0, 9, 0, 2, 0, 0],
//   [0, 5, 0, 0, 0, 7, 0, 0, 0],
//   [0, 0, 0, 0, 4, 5, 7, 0, 0],
//   [0, 0, 0, 1, 0, 0, 0, 3, 0],
//   [0, 0, 1, 0, 0, 0, 0, 6, 8],
//   [0, 0, 8, 5, 0, 0, 0, 1, 0],
//   [0, 9, 0, 0, 0, 0, 4, 0, 0],
// ];

// map=map.map(e=>e.map(()=>0));

// var ans=new Array(9).fill(0).map(()=>new Array(9).fill(0));
// console.log(ans);

// const dlx = new DancingLinks(ans);

// dlx.build(map);
// dlx.solve(0);
// console.log(ans);

// map = [
//   [9, 0, 0, 8, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 5, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 2, 0, 0, 1, 0, 0, 0, 3],
//   [0, 1, 0, 0, 0, 0, 0, 6, 0],
//   [0, 0, 0, 4, 0, 0, 0, 7, 0],
//   [7, 0, 8, 6, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 3, 0, 1, 0, 0],
//   [4, 0, 0, 0, 0, 0, 2, 0, 0],
// ];
// dlx.build(map);
// dlx.solve(0);
// console.log(ans);