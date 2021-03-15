int pingYellow = 13;
int pingRed = 7;
int timeLink = 300; // time in millisecond 0.5 sec

/**
 * Script that runs when our arduino  starts at the begining just ones.
 */

void setup(){
  // that's the way we tell to the arduino generate energy by an especific pin
  // also we can tell how much voltage can generate . Output energý
  pinMode(pingYellow, OUTPUT);
  pinMode(pingRed, OUTPUT);

}
/**
 * That funtion runs after system is working and its excecution works in a loop
 * that depends on how many times the proccesor turns in a second e.g one thousand times by second
 */
void loop(){
  // digital way send all the flow energy in a same time with 1 or 0 nothing
  // analog way behaves as a wave 3.5, 4.5, 5, 4.5, 2.0 it can work in a motor that move a mechanic arm
  //HIGH  
  digitalWrite(pingYellow, HIGH);
  digitalWrite(pingRed, LOW);
  delay(timeLink);
  digitalWrite(pingYellow, LOW);
  digitalWrite(pingRed, HIGH);
  delay(timeLink * 2);
}
