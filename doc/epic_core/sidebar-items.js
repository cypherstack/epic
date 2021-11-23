initSidebarItems({"macro":[["filter_map_vec","Eliminates some of the verbosity in having iter and collect around every filter_map call."],["map_vec","Eliminates some of the verbosity in having iter and collect around every map call."],["ser_multiread","Eliminate some of the boilerplate of deserialization (package ser) by passing just the list of reader function (with optional single param) Example before: let foo = try!(reader.read_u64()); let bar = try!(reader.read_u32()); let fixed_byte_var = try!(reader.read_fixed_bytes(64)); Example after: let (foo, bar, fixed_byte_var) = ser_multiread!(reader, read_u64, read_u32,   read_fixed_bytes(64));"],["ser_multiwrite","Eliminate some of the boilerplate of serialization (package ser) by passing directly pairs of writer function and data to write. Example before: try!(reader.write_u64(42)); try!(reader.write_u32(100)); Example after: ser_multiwrite!(writer, [write_u64, 42], [write_u32, 100]);"],["tee","Allows the conversion of an expression that doesn’t return anything to one that returns the provided identifier. Example: let foo = vec![1,2,3] println!(tee!(foo, foo.append(vec![3,4,5]))"],["to_edge","Macro to clean up casting to edge type TODO: this macro uses unhygenic data T"],["to_u32","Macro to clean up u64 unwrapping as u32"],["to_u64","Macro to clean up u64 unwrapping"],["to_usize","Macro to clean up u64 unwrapping as usize"],["try_iter_map_vec","Same as try_map_vec when thing is an iterator"],["try_map_vec","Same as map_vec when the map closure returns Results. Makes sure the results are “pushed up” and wraps with a try."]],"mod":[["consensus","All the rules required for a cryptocurrency to have reach consensus across the whole network are complex and hard to completely isolate. Some can be simple parameters (like block reward), others complex algorithms (like Merkle sum trees or reorg rules). However, as long as they’re simple enough, consensus-relevant constants and short functions should be kept here."],["core","Core types"],["genesis","Definition of the genesis block. Placeholder for now. #![allow(unused_imports)]"],["global","Values that should be shared across all modules, without necessarily having to pass them all over the place, but aren’t consensus values. should be used sparingly."],["libtx","Library containing lower-level transaction building functions needed by all wallets."],["macros","Generic macros used here and there to simplify and make code more readable."],["pow","The proof of work needs to strike a balance between fast header verification to avoid DoS attacks and difficulty for block verifiers to build new blocks. In addition, mining new blocks should also be as difficult on high end custom-made hardware (ASICs) as on commodity hardware or smartphones. For this reason we use Cuckoo Cycle (see the cuckoo module for more information)."],["ser","Serialization and deserialization layer specialized for binary encoding. Ensures consistency and safety. Basically a minimal subset or rustc_serialize customized for our need."]]});