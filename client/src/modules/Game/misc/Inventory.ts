import { Gun, Item } from "../items";
import { IFireProps } from "../items/Gun";

type TSlots = 1 | 2 | 3 | 4 | 5 | 6;

interface IInventory {
    guns: [Gun, Gun, Gun | null];
    items: [Item | null, Item | null, Item | null];
    selected: TSlots;
    ammo: number
}

class Inventory2 implements IInventory {
    guns: [Gun, Gun, Gun | null];
    items: [Item | null, Item | null, Item | null];
    selected: TSlots;
    ammo: number;
    constructor(
        guns: [Gun, Gun, Gun | null],
        items: [Item | null, Item | null, Item | null] = [null, null, null],
        selected: TSlots = 1,
        ammo: number = 0
    ) {
        this.guns = guns;
        this.items = items;
        this.selected = selected;
        this.ammo = ammo;
    }

    useSlot(slot: TSlots, fireProps?: IFireProps) {
        this.selected = slot;
        if (slot <= 3) {
            //guns
            if (this.guns[slot - 1] && fireProps) {
                this.guns[slot - 1]?.fire(fireProps);
            }

        } else {
            //items
            if (this.items[slot - 4]) {
                this.items[slot - 4]?.use();
            }
        }
    }
}

export default Inventory2;