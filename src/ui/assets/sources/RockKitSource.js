import KitSource from "../KitSource";
import { TransformPivot } from "../../../editor/controls/SpokeControls";

export default class RockKitSource extends KitSource {
  constructor(api) {
    super(api, "https://avnfs.com/wpkcAq_TKHbYrH3h0OOip61UX6xOFk_QYP3DTTTGQf0?size=13534&type=model%2Fgltf%2Bjson&name=RocksKit_v2-f259c85a5e6091bd72eac7e2fdca177209613f1b.gltf");
    this.id = "rock-kit";
    this.name = "Rock Kit";
    this.transformPivot = TransformPivot.Selection;
  }
}
