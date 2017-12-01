/**
This spell throws all entities around you, like a repulsive shield of protection.
**/

const magik = magikcraft.io;

function Sheild() {
    const times = 5 * 1000 / 300; // 5 seconds, every 300ms
    let n = times;
    magik.setTimeout(shield, 300);

    function shield() {
        n --;
        const location = magik.hic();
        const nearbyEntities = location.getWorld().getNearbyEntities(location, 8, 8, 8);
        nearbyEntities.forEach(entity => toss(entity));
        if (n>0) {
            magik.setTimeout(shield, 300)
        }
    }
}

function toss(entity){
    if (entity.getName() == magik.getSender().getName()) {
        return;
    }
    var Vector = Java.type('org.bukkit.util.Vector');
    entity.setVelocity(new Vector(2,2,2));
}