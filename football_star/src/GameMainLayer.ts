class GameMainLayer extends egret.DisplayObjectContainer{
	public constructor() {
		super();

		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.Initialize, this);
	}

	private _timer:egret.Timer = null;

	private Initialize(): void
	{
		let stageW:number = egret.MainContext.instance.stage.stageWidth;
        let stageH:number = egret.MainContext.instance.stage.stageHeight;

		let sky:egret.Bitmap= new egret.Bitmap();
		sky.texture = RES.getRes("bg_png");
        this.addChild(sky);
        sky.width = stageW;
        sky.height = stageH;

		if (this._timer)
		{
			this._timer = new egret.Timer(1000, 0);
			this._timer.addEventListener(egret.TimerEvent.TIMER, this.StartTime, this);
		}
	}

	//背景滚动
	private StartTime(): void
	{

	}

	//足球落下

	//分数显示

}