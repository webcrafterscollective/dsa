// implementation in javascript

hasLoop() {
        let slow = this.head;
        let fast = this.head;
        
        if(!this.head) {
            return false;
        }
        
        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            
            if(slow === fast) {
                return true;
            }
        }
        
        return false;
    }
