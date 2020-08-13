#[macro_use]
extern crate neon;
extern crate ears;
use ears::{Sound, Music, AudioController, State};
use neon::prelude::*;
use std::str::FromStr;

fn hello(mut cx: FunctionContext) -> JsResult<JsString> {
    Ok(cx.string("hello node"))
}



pub struct MusicPlayer {
    pub sound: Music
}

declare_types! {
    pub class JSMusicPlayer for MusicPlayer {
        init(mut cx) {
            let mut path = cx.argument::<JsString>(0)?;
            let mut snd = Music::new(&(path.value() as String)).unwrap();
            Ok(MusicPlayer {
                sound: snd
            })
        }

        method play(mut cx) {
            {
                let mut this = cx.this();
                let guard = cx.lock();
                let mut music = this.borrow_mut(&guard);
                music.sound.play();
            };
            Ok(cx.undefined().upcast())
        }

        method pause(mut cx) {
            {
                let mut this = cx.this();
                let guard = cx.lock();
                let mut music = this.borrow_mut(&guard);
                music.sound.pause();
            };
            Ok(cx.undefined().upcast())
        }

        method stop(mut cx) {
            {
                let mut this = cx.this();
                let guard = cx.lock();
                let mut music = this.borrow_mut(&guard);
                music.sound.stop();
            };
            Ok(cx.undefined().upcast())
        }

        method get_volume(mut cx) {
            let mut volume = {
                let mut this = cx.this();
                let guard = cx.lock();
                let mut music = this.borrow_mut(&guard);
                music.sound.get_volume()
            } as f64;
            Ok(cx.number(volume).upcast())
        }

        method set_volume(mut cx) {
            let mut volume_str = cx.argument::<JsString>(0)?;
            {
                let mut this = cx.this();
                let guard = cx.lock();
                let mut music = this.borrow_mut(&guard);
                music.sound.set_volume(f32::from_str(&(volume_str.value() as String)).unwrap())
            }
            Ok(cx.number(1).upcast())
        }

        method is_playing(mut cx) {
            let mut is_playing = {
                let mut this = cx.this();
                let guard = cx.lock();
                let mut music = this.borrow_mut(&guard);
                music.sound.is_playing()
            };
            Ok(cx.boolean(is_playing).upcast())
        }

        method set_looping(mut cx) {
            let mut looping = cx.argument::<JsBoolean>(0)?;
            {
                let mut this = cx.this();
                let guard = cx.lock();
                let mut music = this.borrow_mut(&guard);
                music.sound.set_looping(looping.value())
            }
            Ok(cx.boolean(looping.value()).upcast())
        }

        method is_looping(mut cx) {
            let mut is_looping = {
                let mut this = cx.this();
                let guard = cx.lock();
                let mut music = this.borrow_mut(&guard);
                music.sound.is_looping()
            };
            Ok(cx.boolean(is_looping).upcast())
        }

        method get_state(mut cx) {
            let mut state = {
                let mut this = cx.this();
                let guard = cx.lock();
                let mut music = this.borrow_mut(&guard);
                music.sound.get_state()
            };
            match state {
                State::Initial => Ok(cx.string("Initial").upcast()),
                State::Playing => Ok(cx.string("Playing").upcast()),
                State::Paused  => Ok(cx.string("Paused").upcast()),
                State::Stopped => Ok(cx.string("Stopped").upcast()),
                _ => Ok(cx.string("Error").upcast())
            }
        }

    }
}

register_module!(mut cx, {
    cx.export_function("hello", hello);
    cx.export_class::<JSMusicPlayer>("MusicPlayer")?;
    Ok(())
});
