import { Component, OnInit } from "@angular/core";

import {
  TNSTextToSpeech,
  SpeakOptions,
} from "@nativescript-community/texttospeech";

@Component({
  selector: "ns-tts",
  templateUrl: "./tts.component.html",
})
export class TtsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  speak() {
    const TTS = new TNSTextToSpeech();

    const speakOptions: SpeakOptions = {
      text: "Whatever you like", /// *** required ***
      speakRate: 0.5, // optional - default is 1.0
      pitch: 1.0, // optional - default is 1.0
      volume: 1.0, // optional - default is 1.0
      locale: "en-GB", // optional - default is system locale,
      finishedCallback: Function, // optional
    };

    TTS.speak(speakOptions).then(
      () => {
        console.log("finished");
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
