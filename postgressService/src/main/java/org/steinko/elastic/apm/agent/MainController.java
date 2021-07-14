package org.steinko.elastic.apm.agent;

import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.stereotype.Controller; 
import org.springframework.web.bind.annotation.GetMapping; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestMapping; 
import org.springframework.web.bind.annotation.RequestParam; 
import org.springframework.web.bind.annotation.ResponseBody; 

@Controller 
@RequestMapping(path="/friend") 
public class MainController { 
 @Autowired 
 private FriendRepository friendRepository; 

 @PostMapping(path="/add") 
 public @ResponseBody String addNewFriend (@RequestParam String name) { 
   Friend friend = new Friend(); 
   friend.setName(name); 
   friendRepository.save(friend); 
   return "Saved"; 
 } 

 @GetMapping(path="/all") 
 public @ResponseBody Iterable<Friend> getAllFriends() { 
   return friendRepository.findAll(); 
 } 
} 