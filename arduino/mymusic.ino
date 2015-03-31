#define NOTE_C4 262
#define NOTE_D4 294
#define NOTE_E4 330
#define NOTE_F4 349
#define NOTE_G4 392
#define NOTE_A4 440
#define NOTE_B4 494
#define NOTE_C5 523
#define NOTE_D5 588

const int soundPin = 9;

#define NUM_NOTES 32

const int notes[NUM_NOTES]{
//boom     clap     sound    of       my       heart  
  NOTE_B4, NOTE_B4, NOTE_B4, NOTE_A4, NOTE_G4, NOTE_B4,
//the      beat     goes     on       and      on       and      on
  NOTE_G4, NOTE_A4, NOTE_G4, NOTE_A4, NOTE_G4, NOTE_A4, NOTE_G4, NOTE_A4,
//and      on       and
  NOTE_B4, NOTE_A4, NOTE_G4,
//boom     clap     make     me       feel     good  
  NOTE_B4, NOTE_B4, NOTE_B4, NOTE_A4, NOTE_G4, NOTE_B4,
//come     on       to       me
  NOTE_D5, NOTE_D5, NOTE_B4, NOTE_A4,
//come     on       to       me       NOW!
  NOTE_D5, NOTE_D5, NOTE_B4, NOTE_A4, NOTE_G4 
};

const int beats[NUM_NOTES]{
  7,7,3,2,4,4,
  3,4,3,4,2,3,2,2,
  2,3,4,
  7,7,3,2,4,4,
  2,5,2,5,
  2,5,2,5,4
};  

const int beatLength = 100;
void setup() {
  pinMode(soundPin, OUTPUT);
}

void loop() {
  for (int i = 0; i < NUM_NOTES; i++){
    if(notes[i] == 0){
      delay(beats[i] * beatLength);
    }
    else{
      ourTone(notes[i],beats[i] * beatLength);
    }
    delay(beatLength/2); // delay between notes;
  }
}  

void ourTone(int freq,int duration){
  tone(soundPin, freq, duration);
  delay(duration);
}


