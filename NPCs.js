/* NPCs.js
 * 		Contains NPC-related functions.
*/
function npcAction(npc, item){

	if(npc.done !== true){
		if(item === null)
			talk(npc);
		else{
			hasItem(npc, item);
		};
		numTurns--;
	}
	else{
		printDialogue(npc.name+": "+npc.freeDialogue[0]);
	}
}

function talk(npc){
	
	printDialogue(npc.name+": "+npc.hintDialogue[0]);
}

function hasItem(npc,item){
	
	if (item.ID === npc.itemID){
		player.item = null;
	
		printDialogue(npc.name+": "+npc.acceptDialogue);
		npc.done=true;
	}
	else
		printDialogue(npc.name+": "+npc.rejectDialogue);
}
