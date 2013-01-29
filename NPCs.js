/* NPCs.js
 * 		Contains NPC-related functions.
*/

function isComplete(){
	for(var i = 0; i < NPC.length; i++){
		if (!NPC[i].done){
			console.log("NPC["+i+"].done: " + NPC[i].done);
			return;
		}
	}
			
	complete = true;
}

function npcAction(npc, item){
	if (npc.name === "Angela"){
		if(item === null){
			talk(npc);
		}
		else if (item.ID === npc.itemID){
			player.item = null;
			updateItem();
			printDialogue(npc.name+": "+npc.acceptDialogue);
			npc.gotRing = true;
		}
	}
	else if (npc.name === "Sarah"){
		if(item === null){
			talk(npc);
		}
		else if (item.ID === npc.itemID){
			player.item = null;
			updateItem();
			printDialogue(npc.name+": "+npc.acceptDialogue);
			npc.gotElephant = true;
		}
	}
	else if(!npc.done){
		if (npc.int > player.int){
			printDialogue(npc.name+": "+npc.intDialogue);
		}
		else if(item === null){
			talk(npc);
		}
		else{
			hasItem(npc, item);
		}
		numTurns--;
		updateMoves();
	}
	else{
		printDialogue(npc.name+": "+npc.freeDialogue[npc.freeIndex]);
		npc.freeIndex = (npc.freeIndex + 1) % npc.freeDialogue.length;
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
