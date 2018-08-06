export class LikeComponent {

  constructor( private _likesCount?: number, private _isSelected?: boolean)

  onClick() {
    this._likesCount += (this._isSelected) ? -1: +1
    this._isSelected = !this._isSelected
  }

  get likeCount(){
    return this._likesCount
  }


  get isSelected(){
    return this._isSelected
  }

}

let component = new LikeComponent(10, true)
component.onclick()
console.log(`likesCount: ${component.likescount}, isSlected: ${component.isSelected}`)
