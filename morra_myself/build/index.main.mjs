// Automatically generated with Reach 0.1.11 (98ccf409)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (98ccf409)';
export const _backendVersion = 24;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1],
      5: [ctc0, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1],
      9: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v312 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v312],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:88:15:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v312, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v316], secs: v318, time: v317, didSend: v71, from: v315 } = txn1;
      
      sim_r.txns.push({
        amt: v316,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v327 = stdlib.safeAdd(v317, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '30'));
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v316], secs: v318, time: v317, didSend: v71, from: v315 } = txn1;
  ;
  const v327 = stdlib.safeAdd(v317, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '30'));
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v327],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v315, v316, v327],
      evt_cnt: 0,
      funcNum: 2,
      lct: v317,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v473, time: v472, didSend: v257, from: v471 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v315,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v473, time: v472, didSend: v257, from: v471 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:77:39:application',
      fs: ['at ./index.rsh:76:17:application call to [unknown function] (defined at: ./index.rsh:76:34:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:75:30:function exp)', 'at ./index.rsh:101:54:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v333, time: v332, didSend: v80, from: v331 } = txn2;
    const v335 = stdlib.add(v316, v316);
    ;
    let v336 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v337 = v332;
    let v344 = v335;
    
    let txn3 = txn2;
    while (await (async () => {
      const v352 = stdlib.eq(v336, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v352;})()) {
      const v359 = stdlib.safeAdd(v337, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '30'));
      const v363 = stdlib.protect(ctc0, await interact.getFingers(), {
        at: './index.rsh:114:58:application',
        fs: ['at ./index.rsh:112:23:application call to [unknown function] (defined at: ./index.rsh:112:27:function exp)'],
        msg: 'getFingers',
        who: 'Alice'
        });
      const v364 = stdlib.protect(ctc0, await interact.getGuess(), {
        at: './index.rsh:115:54:application',
        fs: ['at ./index.rsh:112:23:application call to [unknown function] (defined at: ./index.rsh:112:27:function exp)'],
        msg: 'getGuess',
        who: 'Alice'
        });
      const v365 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:117:66:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:112:23:application call to [unknown function] (defined at: ./index.rsh:112:27:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v366 = stdlib.digest([ctc0, ctc0], [v365, v363]);
      const v368 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:119:76:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:112:23:application call to [unknown function] (defined at: ./index.rsh:112:27:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v369 = stdlib.digest([ctc0, ctc0], [v368, v364]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v315, v316, v331, v344, v359, v366, v369],
        evt_cnt: 2,
        funcNum: 4,
        lct: v337,
        onlyIf: true,
        out_tys: [ctc1, ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:125:19:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v372, v373], secs: v375, time: v374, didSend: v112, from: v371 } = txn4;
          
          ;
          const v383 = stdlib.safeAdd(v374, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '30'));
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v359],
        tys: [ctc3, ctc0, ctc3, ctc0, ctc0, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v315, v316, v331, v344, v359],
          evt_cnt: 0,
          funcNum: 5,
          lct: v337,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v439, time: v438, didSend: v208, from: v437 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v331,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v439, time: v438, didSend: v208, from: v437 } = txn5;
        ;
        const v440 = stdlib.addressEq(v315, v437);
        const v441 = stdlib.addressEq(v331, v437);
        const v442 = v440 ? true : v441;
        stdlib.assert(v442, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:126:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeout(), {
          at: './index.rsh:77:39:application',
          fs: ['at ./index.rsh:76:17:application call to [unknown function] (defined at: ./index.rsh:76:34:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:75:30:function exp)', 'at ./index.rsh:126:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v372, v373], secs: v375, time: v374, didSend: v112, from: v371 } = txn4;
        ;
        const v376 = stdlib.addressEq(v315, v371);
        stdlib.assert(v376, {
          at: './index.rsh:125:19:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v383 = stdlib.safeAdd(v374, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '30'));
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 6,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v383],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v315, v316, v331, v344, v372, v373, v383],
            evt_cnt: 0,
            funcNum: 7,
            lct: v374,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v421, time: v420, didSend: v174, from: v419 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v315,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v421, time: v420, didSend: v174, from: v419 } = txn6;
          ;
          const v422 = stdlib.addressEq(v315, v419);
          const v423 = stdlib.addressEq(v331, v419);
          const v424 = v422 ? true : v423;
          stdlib.assert(v424, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:147:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:77:39:application',
            fs: ['at ./index.rsh:76:17:application call to [unknown function] (defined at: ./index.rsh:76:34:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:75:30:function exp)', 'at ./index.rsh:147:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v390, v391], secs: v393, time: v392, didSend: v124, from: v389 } = txn5;
          ;
          const v394 = stdlib.addressEq(v331, v389);
          stdlib.assert(v394, {
            at: './index.rsh:146:17:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const txn6 = await (ctc.sendrecv({
            args: [v315, v316, v331, v344, v372, v373, v390, v391, v365, v363, v368, v364],
            evt_cnt: 4,
            funcNum: 8,
            lct: v392,
            onlyIf: true,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:164:19:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v398, v399, v400, v401], secs: v403, time: v402, didSend: v136, from: v397 } = txn6;
              
              ;
              
              let v413;
              const v414 = stdlib.eq(v401, v391);
              if (v414) {
                v413 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                }
              else {
                const v415 = stdlib.safeAdd(v399, v390);
                const v416 = stdlib.eq(v415, v401);
                if (v416) {
                  v413 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                  }
                else {
                  const v418 = stdlib.eq(v415, v391);
                  if (v418) {
                    v413 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                    }
                  else {
                    v413 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                    }
                  }
                }
              const cv336 = v413;
              const cv337 = v402;
              const cv344 = v344;
              
              await (async () => {
                const v336 = cv336;
                const v337 = cv337;
                const v344 = cv344;
                
                if (await (async () => {
                  const v352 = stdlib.eq(v336, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                  
                  return v352;})()) {
                  const v359 = stdlib.safeAdd(v337, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '30'));
                  sim_r.isHalt = false;
                  }
                else {
                  const v455 = stdlib.eq(v336, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                  const v458 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:182:18:decimal', stdlib.UInt_max, '2'), v316);
                  const v460 = v455 ? v315 : v331;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v460,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [v398, v399, v400, v401], secs: v403, time: v402, didSend: v136, from: v397 } = txn6;
          ;
          const v404 = stdlib.addressEq(v315, v397);
          stdlib.assert(v404, {
            at: './index.rsh:164:19:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v405 = stdlib.digest([ctc0, ctc0], [v398, v399]);
          const v406 = stdlib.digestEq(v372, v405);
          stdlib.assert(v406, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:165:28:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Alice'
            });
          const v407 = stdlib.digest([ctc0, ctc0], [v400, v401]);
          const v408 = stdlib.digestEq(v373, v407);
          stdlib.assert(v408, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:166:28:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Alice'
            });
          stdlib.protect(ctc2, await interact.seeWinning(v399, v390), {
            at: './index.rsh:172:36:application',
            fs: ['at ./index.rsh:170:17:application call to [unknown function] (defined at: ./index.rsh:170:34:function exp)'],
            msg: 'seeWinning',
            who: 'Alice'
            });
          
          let v413;
          const v414 = stdlib.eq(v401, v391);
          if (v414) {
            v413 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            }
          else {
            const v415 = stdlib.safeAdd(v399, v390);
            const v416 = stdlib.eq(v415, v401);
            if (v416) {
              v413 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
              }
            else {
              const v418 = stdlib.eq(v415, v391);
              if (v418) {
                v413 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                }
              else {
                v413 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                }
              }
            }
          const cv336 = v413;
          const cv337 = v402;
          const cv344 = v344;
          
          v336 = cv336;
          v337 = cv337;
          v344 = cv344;
          
          txn3 = txn6;
          continue;
          
          }
        
        }
      
      }
    const v455 = stdlib.eq(v336, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v458 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:182:18:decimal', stdlib.UInt_max, '2'), v316);
    const v460 = v455 ? v315 : v331;
    ;
    stdlib.protect(ctc2, await interact.seeOutcome(v336), {
      at: './index.rsh:187:32:application',
      fs: ['at ./index.rsh:185:13:application call to [unknown function] (defined at: ./index.rsh:185:30:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v316], secs: v318, time: v317, didSend: v71, from: v315 } = txn1;
  ;
  const v327 = stdlib.safeAdd(v317, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '30'));
  stdlib.protect(ctc1, await interact.acceptWager(v316), {
    at: './index.rsh:95:33:application',
    fs: ['at ./index.rsh:94:17:application call to [unknown function] (defined at: ./index.rsh:94:21:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v315, v316, v327],
    evt_cnt: 0,
    funcNum: 1,
    lct: v317,
    onlyIf: true,
    out_tys: [],
    pay: [v316, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v333, time: v332, didSend: v80, from: v331 } = txn2;
      
      const v335 = stdlib.add(v316, v316);
      sim_r.txns.push({
        amt: v316,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v336 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v337 = v332;
      const v344 = v335;
      
      if (await (async () => {
        const v352 = stdlib.eq(v336, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v352;})()) {
        const v359 = stdlib.safeAdd(v337, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '30'));
        sim_r.isHalt = false;
        }
      else {
        const v455 = stdlib.eq(v336, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        const v458 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:182:18:decimal', stdlib.UInt_max, '2'), v316);
        const v460 = v455 ? v315 : v331;
        sim_r.txns.push({
          kind: 'from',
          to: v460,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v327],
    tys: [ctc3, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v315, v316, v327],
      evt_cnt: 0,
      funcNum: 2,
      lct: v317,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v473, time: v472, didSend: v257, from: v471 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v315,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v473, time: v472, didSend: v257, from: v471 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:77:39:application',
      fs: ['at ./index.rsh:76:17:application call to [unknown function] (defined at: ./index.rsh:76:34:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:75:30:function exp)', 'at ./index.rsh:101:54:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v333, time: v332, didSend: v80, from: v331 } = txn2;
    const v335 = stdlib.add(v316, v316);
    ;
    let v336 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v337 = v332;
    let v344 = v335;
    
    let txn3 = txn2;
    while (await (async () => {
      const v352 = stdlib.eq(v336, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v352;})()) {
      const v359 = stdlib.safeAdd(v337, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '30'));
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 4,
        out_tys: [ctc2, ctc2],
        timeoutAt: ['time', v359],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v315, v316, v331, v344, v359],
          evt_cnt: 0,
          funcNum: 5,
          lct: v337,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v439, time: v438, didSend: v208, from: v437 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v331,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v439, time: v438, didSend: v208, from: v437 } = txn5;
        ;
        const v440 = stdlib.addressEq(v315, v437);
        const v441 = stdlib.addressEq(v331, v437);
        const v442 = v440 ? true : v441;
        stdlib.assert(v442, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:126:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:77:39:application',
          fs: ['at ./index.rsh:76:17:application call to [unknown function] (defined at: ./index.rsh:76:34:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:75:30:function exp)', 'at ./index.rsh:126:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v372, v373], secs: v375, time: v374, didSend: v112, from: v371 } = txn4;
        ;
        const v376 = stdlib.addressEq(v315, v371);
        stdlib.assert(v376, {
          at: './index.rsh:125:19:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v383 = stdlib.safeAdd(v374, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '30'));
        const v387 = stdlib.protect(ctc0, await interact.getFingers(), {
          at: './index.rsh:140:56:application',
          fs: ['at ./index.rsh:139:21:application call to [unknown function] (defined at: ./index.rsh:139:25:function exp)'],
          msg: 'getFingers',
          who: 'Bob'
          });
        const v388 = stdlib.protect(ctc0, await interact.getGuess(), {
          at: './index.rsh:141:52:application',
          fs: ['at ./index.rsh:139:21:application call to [unknown function] (defined at: ./index.rsh:139:25:function exp)'],
          msg: 'getGuess',
          who: 'Bob'
          });
        
        const txn5 = await (ctc.sendrecv({
          args: [v315, v316, v331, v344, v372, v373, v383, v387, v388],
          evt_cnt: 2,
          funcNum: 6,
          lct: v374,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:146:17:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v390, v391], secs: v393, time: v392, didSend: v124, from: v389 } = txn5;
            
            ;
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v383],
          tys: [ctc3, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v315, v316, v331, v344, v372, v373, v383],
            evt_cnt: 0,
            funcNum: 7,
            lct: v374,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v421, time: v420, didSend: v174, from: v419 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v315,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v421, time: v420, didSend: v174, from: v419 } = txn6;
          ;
          const v422 = stdlib.addressEq(v315, v419);
          const v423 = stdlib.addressEq(v331, v419);
          const v424 = v422 ? true : v423;
          stdlib.assert(v424, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:147:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:77:39:application',
            fs: ['at ./index.rsh:76:17:application call to [unknown function] (defined at: ./index.rsh:76:34:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:75:30:function exp)', 'at ./index.rsh:147:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v390, v391], secs: v393, time: v392, didSend: v124, from: v389 } = txn5;
          ;
          const v394 = stdlib.addressEq(v331, v389);
          stdlib.assert(v394, {
            at: './index.rsh:146:17:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 4,
            funcNum: 8,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [v398, v399, v400, v401], secs: v403, time: v402, didSend: v136, from: v397 } = txn6;
          ;
          const v404 = stdlib.addressEq(v315, v397);
          stdlib.assert(v404, {
            at: './index.rsh:164:19:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v405 = stdlib.digest([ctc0, ctc0], [v398, v399]);
          const v406 = stdlib.digestEq(v372, v405);
          stdlib.assert(v406, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:165:28:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Bob'
            });
          const v407 = stdlib.digest([ctc0, ctc0], [v400, v401]);
          const v408 = stdlib.digestEq(v373, v407);
          stdlib.assert(v408, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:166:28:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Bob'
            });
          stdlib.protect(ctc1, await interact.seeWinning(v399, v390), {
            at: './index.rsh:172:36:application',
            fs: ['at ./index.rsh:170:17:application call to [unknown function] (defined at: ./index.rsh:170:34:function exp)'],
            msg: 'seeWinning',
            who: 'Bob'
            });
          
          let v413;
          const v414 = stdlib.eq(v401, v391);
          if (v414) {
            v413 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            }
          else {
            const v415 = stdlib.safeAdd(v399, v390);
            const v416 = stdlib.eq(v415, v401);
            if (v416) {
              v413 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
              }
            else {
              const v418 = stdlib.eq(v415, v391);
              if (v418) {
                v413 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                }
              else {
                v413 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                }
              }
            }
          const cv336 = v413;
          const cv337 = v402;
          const cv344 = v344;
          
          v336 = cv336;
          v337 = cv337;
          v344 = cv344;
          
          txn3 = txn6;
          continue;
          
          }
        
        }
      
      }
    const v455 = stdlib.eq(v336, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v458 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:182:18:decimal', stdlib.UInt_max, '2'), v316);
    const v460 = v455 ? v315 : v331;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v336), {
      at: './index.rsh:187:32:application',
      fs: ['at ./index.rsh:185:13:application call to [unknown function] (defined at: ./index.rsh:185:30:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiANAAEIBQIgSAeQAR4JUCgmAwEAAQEAIjUAMRhBBGkqZEkiWzUBJFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJJQxAAhtJIQcMQAEjSSQMQADJJBJEIQo0ARJENARJIhJMNAISEUQoZClkUEk1A0lXACA1/4GYAVs1/kk1BUlKIls1/SRbNfyBEFs1+4EYWzX6gAR/ojtSNP0WUDT8FlA0+xZQNPoWULA0/zEAEkQ0A1dQIDT9FjT8FlABEkQ0A1dwIDT7FjT6FlABEkQ0+jT+EkEABiM1+UIAKTT8NAMhCFsISTX4NPoSQQAHIQQ1+UIAETT4NP4SQQAGIjX5QgADIzX5NP80AyEFWzQDVyggNPkyBjQDIQZbQgK8SCEHNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/4AE4huzqbAyBjQDIQhbD0Q0/zEAEjQDVyggMQASEUSxIrIBNAMhBluyCCOyEDT/sgezQgLDSYEGDEAAmkghBzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKVwAgNf8hBVs1/lcoIDX9IQZbNfxXUCA1+1dwIDX6STUFSSJbNfkkWzX4gARKIcv8NPkWUDT4FlCwMgY0AyEIWwxENP0xABJENP80/hZQNP1QNPwWUDT7UDT6UDT5FlA0+BZQKEsBVwB/ZylLAVd/IWdIIQo1ATIGNQJCAj1IJTQBEkQ0BEkiEkw0AhIRRChkSTUDVyggNf+ABMyZklywMgY0AyELWw9ENANXACAxABI0/zEAEhFEsSKyATQDIQZbsggjshA0/7IHs0IB0kkhBAxAANZJgQQMQACOSCU0ARJENARJIhJMNAISEUQoZEk1A0lKVwAgNf8hBVs1/lcoIDX9IQZbNfxJNQVJVwAgNftXICA1+oAEYF2kKzT7UDT6ULAyBjQDIQtbDEQ0/zEAEkQyBiEJCDX5NP80/hZQNP1QNPwWUDT7UDT6UDT5FlAoSwFXAH9nKUsBV38ZZ0ghBzUBMgY1AkIBUSEEEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIQxbD0SxIrIBNAMhBVuyCCOyEDQDVwAgsgezQgD1SSMMQABDSCM0ARJENARJIhJMNAISEUQoZEk1AyEFWzX/gASai5F0sDIGNAMhDFsMRDT/iAEsNANXACA0/zEAIzIGNP9JCEIAUUiBoI0GiAERIjQBEkQ0BEkiEkw0AhIRREk1BRc1/4AEgsRh/jT/FlCwNP+IAOsyBiEJCDX+MQA0/xZQNP4WUChLAVcAMGdIIzUBMgY1AkIAdjX/Nf41/TX8Nfs1+jT9IxJBACo0/iEJCDX5NPo0+xZQNPxQNP8WUDT5FlAoSwFXAFhnSCU1ATIGNQJCADmxIrIBIQQ0+wuyCCOyEDT8NPo0/SEEEk2yB7NCAAAxGSUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAzE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 160,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v316",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v316",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v372",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v373",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v390",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v391",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v398",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v399",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v400",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v401",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v372",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v373",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v390",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v391",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v398",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v399",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v400",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v401",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001afe38038062001afe83398101604081905262000026916200024a565b60008080554360035560408051602080820183529281528151338152845181850152928401515183830152905190917f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d919081900360600190a160208201515162000095903414600762000122565b620000a243601e6200014d565b81526040805160608082018352600060208084018281528486018381523380875289840151518352885182526001948590554390945586519283019390935251948101949094525190830152906080016040516020818303038152906040526002908051906020019062000118929190620001a4565b5050505062000350565b81620001495760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b6000826200015c8382620002ec565b91508110156200019e5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000140565b92915050565b828054620001b29062000313565b90600052602060002090601f016020900481019282620001d6576000855562000221565b82601f10620001f157805160ff191683800117855562000221565b8280016001018555821562000221579182015b828111156200022157825182559160200191906001019062000204565b506200022f92915062000233565b5090565b5b808211156200022f576000815560010162000234565b60008183036040808212156200025f57600080fd5b80518082016001600160401b0380821183831017156200028f57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f1986011215620002a957600080fd5b835194506020850191508482108183111715620002d657634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600082198211156200030e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200032857607f821691505b602082108114156200034a57634e487b7160e01b600052602260045260246000fd5b50919050565b61179e80620003606000396000f3fe60806040526004361061008f5760003560e01c80638e314769116100565780638e3147691461010a578063ab53f2c61461011d578063bf2c5b2414610140578063cc923b2914610153578063ebdbfdcc1461016657005b80631e93b0f11461009857806321642639146100bc5780632c10a159146100cf5780637eea518c146100e257806383230757146100f557005b3661009657005b005b3480156100a457600080fd5b506003545b6040519081526020015b60405180910390f35b6100966100ca366004611353565b610179565b6100966100dd366004611376565b61040a565b6100966100f0366004611376565b61058d565b34801561010157600080fd5b506001546100a9565b610096610118366004611376565b61070b565b34801561012957600080fd5b506101326108a6565b6040516100b3929190611388565b61009661014e366004611376565b610943565b6100966101613660046113e5565b610ada565b610096610174366004611353565b610da7565b610189600760005414601c61100c565b6101a38135158061019c57506001548235145b601d61100c565b6000808055600280546101b5906113f7565b80601f01602080910402602001604051908101604052809291908181526020018280546101e1906113f7565b801561022e5780601f106102035761010080835404028352916020019161022e565b820191906000526020600020905b81548152906001019060200180831161021157829003601f168201915b50505050508060200190518101906102469190611448565b90506102598160c001514310601e61100c565b7fb2a03f9306ab783007397921312164b54fbeead1388356342ff3ef55c8552b3f338360405161028a9291906114e6565b60405180910390a161029e3415601a61100c565b60408101516102b9906001600160a01b03163314601b61100c565b61031360405180610100016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b81516001600160a01b0390811682526020808401518184015260408085015190921682840152606080850151908401526080808501519084015260a080850151908401528481013560c08401528482013560e084015260096000554360015590516103e09183910160006101008201905060018060a01b038084511683526020840151602084015280604085015116604084015250606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b60405160208183030381529060405260029080519060200190610404929190611213565b50505050565b61041a600160005414600961100c565b6104348135158061042d57506001548235145b600a61100c565b600080805560028054610446906113f7565b80601f0160208091040260200160405190810160405280929190818152602001828054610472906113f7565b80156104bf5780601f10610494576101008083540402835291602001916104bf565b820191906000526020600020905b8154815290600101906020018083116104a257829003601f168201915b50505050508060200190518101906104d79190611517565b90506104ea81604001514310600b61100c565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161051b929190611586565b60405180910390a161053481602001513414600861100c565b61053c611297565b815181516001600160a01b039091169052602080830180518351830152825133604090910152818301805160019052514392019190915251800160208201516040015261058881611032565b505050565b61059d600160005414600d61100c565b6105b7813515806105b057506001548235145b600e61100c565b6000808055600280546105c9906113f7565b80601f01602080910402602001604051908101604052809291908181526020018280546105f5906113f7565b80156106425780601f1061061757610100808354040283529160200191610642565b820191906000526020600020905b81548152906001019060200180831161062557829003601f168201915b505050505080602001905181019061065a9190611517565b905061066e8160400151431015600f61100c565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161069f929190611586565b60405180910390a16106b33415600c61100c565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106f0573d6000803e3d6000fd5b5060008080556001819055610707906002906112e9565b5050565b61071b600560005414601761100c565b6107358135158061072e57506001548235145b601861100c565b600080805560028054610747906113f7565b80601f0160208091040260200160405190810160405280929190818152602001828054610773906113f7565b80156107c05780601f10610795576101008083540402835291602001916107c0565b820191906000526020600020905b8154815290600101906020018083116107a357829003601f168201915b50505050508060200190518101906107d891906115c3565b90506107ec8160800151431015601961100c565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d338360405161081d929190611586565b60405180910390a16108313415601561100c565b8051610865906001600160a01b0316331461085b5760408201516001600160a01b0316331461085e565b60015b601661100c565b80604001516001600160a01b03166108fc82606001519081150290604051600060405180830381858888f193505050501580156106f0573d6000803e3d6000fd5b6000606060005460028080546108bb906113f7565b80601f01602080910402602001604051908101604052809291908181526020018280546108e7906113f7565b80156109345780601f1061090957610100808354040283529160200191610934565b820191906000526020600020905b81548152906001019060200180831161091757829003601f168201915b50505050509050915091509091565b610953600760005414602161100c565b61096d8135158061096657506001548235145b602261100c565b60008080556002805461097f906113f7565b80601f01602080910402602001604051908101604052809291908181526020018280546109ab906113f7565b80156109f85780601f106109cd576101008083540402835291602001916109f8565b820191906000526020600020905b8154815290600101906020018083116109db57829003601f168201915b5050505050806020019051810190610a109190611448565b9050610a248160c00151431015602361100c565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610a55929190611586565b60405180910390a1610a693415601f61100c565b8051610a9d906001600160a01b03163314610a935760408201516001600160a01b03163314610a96565b60015b602061100c565b805160608201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106f0573d6000803e3d6000fd5b610aea600960005414602861100c565b610b0481351580610afd57506001548235145b602961100c565b600080805560028054610b16906113f7565b80601f0160208091040260200160405190810160405280929190818152602001828054610b42906113f7565b8015610b8f5780601f10610b6457610100808354040283529160200191610b8f565b820191906000526020600020905b815481529060010190602001808311610b7257829003601f168201915b5050505050806020019051810190610ba7919061164d565b9050610bc6604051806040016040528060008152602001600081525090565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808083019190915284013560a08201527fc7e07aa759791812e0e03fb583c5fbed2f43e8adb4535b4faa695e77e84ea4fe9060c00160405180910390a1610c393415602461100c565b8151610c51906001600160a01b03163314602561100c565b60408051610c9d91610c7791602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c836080015114602661100c565b604080516060858101356020830152608086013592820192909252610ce391016040516020818303038152906040528051906020012060001c8360a0015114602761100c565b60e082015160808401351415610cfc5760018152610d4a565b610d1183602001602001358360c00151611161565b6020820181905260808401351415610d2c5760028152610d4a565b8160e0015181602001511415610d455760008152610d4a565b600181525b610d52611297565b825181516001600160a01b039182169052602080850151835182015260408086015184519316928101929092528351818401805191909152805143920191909152606085015190519091015261040481611032565b610db7600560005414601261100c565b610dd181351580610dca57506001548235145b601361100c565b600080805560028054610de3906113f7565b80601f0160208091040260200160405190810160405280929190818152602001828054610e0f906113f7565b8015610e5c5780601f10610e3157610100808354040283529160200191610e5c565b820191906000526020600020905b815481529060010190602001808311610e3f57829003601f168201915b5050505050806020019051810190610e7491906115c3565b9050610e8c6040518060200160405280600081525090565b610e9d82608001514310601461100c565b7fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a3384604051610ece9291906114e6565b60405180910390a1610ee23415601061100c565b8151610efa906001600160a01b03163314601161100c565b610f0543601e611161565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b0390811680835260208086015181850190815260408088015185168187019081526060808a01518189019081528b8601356080808b019182528d86013560a0808d019182528d5160c0808f0191825260076000554360015589519b8c019c909c529851978a01979097529451909916928701929092525196850196909652945190830152925191810191909152905160e08201526101000160405160208183030381529060405260029080519060200190611005929190611213565b5050505050565b816107075760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516020810190915260008152602082015151600114156110fe57611062826020015160200151601e611161565b81526040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528c51516001600160a01b03908116808c528e5189015188528e518d0151821687528e8901518d015185528d5183526005909955436001558b519788019890985294519986019990995291519094169383019390935291519481019490945251908301529060c0016103e0565b6020820151516002146111165781516040015161111a565b8151515b6001600160a01b03166108fc61113960028560000151602001516111b4565b6040518115909202916000818181858888f193505050501580156106f0573d6000803e3d6000fd5b60008261116e838261170f565b91508110156111ae5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401611029565b92915050565b60008115806111d8575082826111ca8183611727565b92506111d69083611746565b145b6111ae5760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401611029565b82805461121f906113f7565b90600052602060002090601f0160209004810192826112415760008555611287565b82601f1061125a57805160ff1916838001178555611287565b82800160010185558215611287579182015b8281111561128757825182559160200191906001019061126c565b50611293929150611326565b5090565b6040805160a081018252600091810182815260608201839052608082019290925290819081526020016112e460405180606001604052806000815260200160008152602001600081525090565b905290565b5080546112f5906113f7565b6000825580601f10611305575050565b601f0160209004906000526020600020908101906113239190611326565b50565b5b808211156112935760008155600101611327565b60006060828403121561134d57600080fd5b50919050565b60006060828403121561136557600080fd5b61136f838361133b565b9392505050565b60006040828403121561134d57600080fd5b82815260006020604081840152835180604085015260005b818110156113bc578581018301518582016060015282016113a0565b818111156113ce576000606083870101525b50601f01601f191692909201606001949350505050565b600060a0828403121561134d57600080fd5b600181811c9082168061140b57607f821691505b6020821081141561134d57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461144357600080fd5b919050565b600060e0828403121561145a57600080fd5b60405160e0810181811067ffffffffffffffff8211171561148b57634e487b7160e01b600052604160045260246000fd5b6040526114978361142c565b8152602083015160208201526114af6040840161142c565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b6001600160a01b03831681526080810161136f60208301848035825260208082013590830152604090810135910152565b60006060828403121561152957600080fd5b6040516060810181811067ffffffffffffffff8211171561155a57634e487b7160e01b600052604160045260246000fd5b6040526115668361142c565b815260208301516020820152604083015160408201528091505092915050565b6001600160a01b0383168152813560208083019190915260608201908301358015158082146115b457600080fd5b80604085015250509392505050565b600060a082840312156115d557600080fd5b60405160a0810181811067ffffffffffffffff8211171561160657634e487b7160e01b600052604160045260246000fd5b6040526116128361142c565b81526020830151602082015261162a6040840161142c565b604082015260608301516060820152608083015160808201528091505092915050565b600061010080838503121561166157600080fd5b6040519081019067ffffffffffffffff8211818310171561169257634e487b7160e01b600052604160045260246000fd5b8160405261169f8461142c565b8152602084015160208201526116b76040850161142c565b6040820152606084015160608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611722576117226116f9565b500190565b6000816000190483118215151615611741576117416116f9565b500290565b60008261176357634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212202aab4dde9ec3b5ea6cc8e9c216a12be7c854fd8113b7ef4617cf5145f8cccd0664736f6c634300080c0033`,
  BytecodeLen: 6910,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:90:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:101:54:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:183:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:110:21:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:126:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:128:21:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:147:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:148:13:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
