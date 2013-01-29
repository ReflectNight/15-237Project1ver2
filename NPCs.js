/* NPCs.js
 * 		Contains NPC-related functions.
*/

function isComplete(){
	for(var i = 0; i < NPC.length; i++){
		if (!NPC[i].done){
			return;
		}
	}
			
	complete = true;
}

function npcAction(npc, item){
	if(npc.done !== true){
		if(item === null)
			talk(npc);
		else{
			hasItem(npc, item);
		}
		numTurns--;
		updateMoves();
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
		updateItem();
	
		printDialogue(npc.name+": "+npc.acceptDialogue);
		npc.done=true;
		isComplete();
	}
	else
		printDialogue(npc.name+": "+npc.rejectDialogue + ";" + npc.hintDialogue[1]);
}
