import {
    world,
    EntityQueryOptions,
    EntityMovementComponent,
} from "mojang-minecraft";

const ACTIVATING_FLAG_TAG = "lapis256:activate_running_blocker";
const WALK_MOVEMENT_VALUE = 0.1;

world.events.tick.subscribe(() => {
    const options = new EntityQueryOptions();
    options.tags = [ACTIVATING_FLAG_TAG];
    for (const player of world.getPlayers(options)) {
        /** @type {EntityMovementComponent} */
        const movement = player.getComponent("minecraft:movement");
        movement.setCurrent(WALK_MOVEMENT_VALUE);
        console.warn(movement.current);
    }
});
