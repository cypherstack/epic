#![no_main]
#[macro_use]
extern crate libfuzzer_sys;
extern crate epic_p2p;
extern crate stack_epic_core;

use epic_p2p::msg::TxHashSetRequest;
use stack_epic_core::ser;

fuzz_target!(|data: &[u8]| {
	let mut d = data.clone();
	let _t: Result<TxHashSetRequest, ser::Error> = ser::deserialize(&mut d);
});
