function Directory() {
  return (
    <div>
      <h5>Load Operations</h5>
      <table class="table table-hover table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Operation</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>$t = SE (MEM [$s + i]:1)</td>
            <td>
              To load a byte from memory as a signed value. The contents of the 8-bit byte at the memory location specified by the effective 
              address are fetched, sign-extended, and placed in GPR <i>$t</i>.<br></br>The 16-bit signed offset is added to the contents of 
              MEM to form the effective address. "SE( x )" means the 32-bit quantity obtained by extending the value <i>x</i> on<br></br>
              the left with its most significant bit. The "MEM[ a ]: n" means the <i>n</i> bytes of memory starting with address <i>a</i>. 
              The address must always be aligned, meaning,<br></br><i>a</i> must be divisble by <i>n</i>, which must be a power of 2.
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>$t = ZE (MEM [$s + i]:1)</td>
            <td>
              To load a byte from memory as an unsigned value. The contents of the 8-bit byte at the memory location specified by the effective 
              address are fetched, zero-extended, and placed in GPR <i>$t</i>.<br></br>The 16-bit signed offset is added to the contents of MEM 
              to form the effective address. "ZE( x )" means the 32-bit quantity obtained by extending the value <i>x</i> on the left with 0 bits.
              <br></br>The "MEM[ a ]: n" means the <i>n</i> bytes of memory starting with address <i>a</i>. The address must always be aligned, 
              meaning, <i>a</i> must be divisble by <i>n</i>, which must be a power of 2.
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>$t = SE (MEM [$s + i]:2)</td>
            <td>
              To load a halfword from memory as a signed value. The contents of the 16-bit halfword at the memory location specified by the aligned 
              effective address are fetched, sign-extended, and placed in GPR <i>$t</i>.<br></br>The 16-bit signed offset is added to the contents of 
              MEM to form the effective address.
            </td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>$t = ZE (MEM [$s + i]:2)</td>
            <td>
              To load a halfword from memory as a unsigned value. The contents of the 16-bit halfword at the memory location specified by the aligned 
              effective address are fetched, zero-extended, and placed in GPR <i>$t</i>.<br></br>The 16-bit signed offset is added to the contents of 
              MEM to form the effective address.
            </td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>$t = MEM [$s + i]:4</td>
            <td>
              To load the word from memory as a signed value. The contents of the 32-bit word at the memory location specified by the aligned effective 
              address are fetched,sign-extended to<br></br>the GPR register length if necessary, and placed in GPR <i>$t</i>. The 16-bit signed offset is 
              added to the contents of MEM to form the effective address. The "MEM[ a ]: n" means the <i>n</i> bytes of<br></br>memory starting with address 
              <i>a</i>. The address must always be aligned, meaning, <i>a</i> must be divisble by <i>n</i>, which must be a power of 2.
              </td>
          </tr>
        </tbody>
      </table>
      <h5>Store Operations</h5>
      <table class="table table-hover table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Operation</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>MEM [$s + i]:1 = LB ($t)</td>
            <td>
              To store a byte to memory. The least-significant byte of GPR <i>$t</i> is stored in memory at the location specified 
              by the effective address. The 16-bit signed offset <br></br>is added to the contents of MEM to form the effective address. 
              The "MEM[ a ]: n" means the <i>n</i> bytes of memory starting with address <i>a</i>. The address must always<br></br>
              be aligned, meaning, <i>a</i> must be divisble by <i>n</i>, which must be a power of 2. The "LB ( x )" means the least 
              significant 8 bits of the 32-bit location <i>x</i>.<br></br>This means that you will be storing the least significant 8 bits 
              into <i>1</i> byte of memory starting at address <i>[$s + 1]</i>.
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>MEM [$s + i]:2 = LH ($t)</td>
            <td>
              To store a halfword to memory. The least-significant 16-bit halfword of register <i>$t</i> is stored in memory at the location 
              specified by the aligned effective address.<br></br>The 16-bit signed <i>offset</i> is added to the contents of MEM to form the 
              effective address. The "MEM[ a ]: n" means the <i>n</i> bytes of memory starting with address <i>a</i>. The address<br></br>
              must always be aligned, meaning, <i>a</i> must be divisble by <i>n</i>, which must be a power of 2. The "LH ( x )" means the 
              least significant 16 bits of the 32-bit location <i>x</i>.<br></br>This will store the least significant 16 bits into the starting 
              address <i>[$s + i]</i> with <i>2</i> bytes of memory.
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>MEM [$s + i]:4 = $t</td>
            <td>
              To store a word to memory. The least-significant 32-bit word of GPR <i>$t</i> is stored in memory at the location specified by the 
              aligned effective address. The 16-bit signed<br></br>offset is added to the contents of MEM to form the effective address. The 
              "MEM[ a ]: n" means the <i>n</i> bytes of memory starting with address <i>a</i>. The address must always be aligned, <br></br>
              meaning, <i>a</i> must be divisble by <i>n</i>, which must be a power of 2. This will store <i>$t</i> into <i>4</i> bytes of memory 
              starting at address <i>[$s + i]</i>.
            </td>
          </tr>
        </tbody>
      </table>
      <h5>Jump Operations</h5>
      <table class="table table-hover table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Operation</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>pc += i &lt;&lt; 2</td>
            <td>
              To branch within the current 256 MB-aligned region. The effective target address is in the current 256 MB-aligned 
              region. The low 28 bits of the target addess is the <i>i</i> shifted left 2 bits.<br></br> The remaining upper bits 
              are corresponding bits of the addess of the instruction in the delay slot (not the branch itself). <br></br>This 
              will jump to the effective target address, execute the instruction that follows the jump, in the branch delay slot, 
              before executing the jump itself.
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>$31 = pc; pc += i &lt;&lt; 2</td>
            <td>
              To execute a procedure call within the current 256 MB-aligned region. Places the return address link in the GPR 31.
              The return link is the address of the second instruction<br></br> following the branch at which location execution 
              continues after a procedure call. The effective target address is in the "current" 256 MB-aligned region.<br></br>The low 
              28 bits of the target address is the <i>i</i> shifted left 2 bits. The remaining upper bits are the corresponding 
              bits of the address of the instruction in the delay slot (not the branch itself).<br></br>It will jump to the effective target 
              address, execute the instruction that follows the jump, in the branch delay slot, before executing the jump itself.
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>$31 = pc; pc = $s</td>
            <td>
              To execute a procedure call to an instruction address in a register. It places the return address link in GPR 31 or rd. The 
              return link is the address of the second instruction following the branch,<br></br> where execution continues after a procedure
              call. Jumps to the effective target address in GPR 31. Set the ISA Mode bit to the value in GPR 31 bit 0. Set bit 0 of the target
              <br></br>address to 0. If the target ISA mode bit is 0 and the target address is not 4-byte aligned, an address error exception will
              occur when the target <br></br>instruction is fetched. It will execute the instruction that follows the jump in the branch delay slot, 
              before executing the jump itself.
            </td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>pc = $s</td>
            <td>
              To execute a branch to an instruction address in a register. It will jump to the effective target address in $s. Execute the 
              instruction following the jump, in the branch delay slot, before jumping.
            </td>
          </tr>
        </tbody>
      </table>
      <h5>Branch Operations Operations</h5>
      <table class="table table-hover table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Operation</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>if ($s == $t) pc += i &lt;&lt; 2</td>
            <td>
              To compare GPRs then do a PC-relative conditional branch. An 18-bit signed offset (the 16-bit <i>offset</i> field shifted left 2 bits)
              is added to the address of the instruction following <br></br>the branch (not the branch itself), in the branch delay slot, to form a 
              PC-relative effective target address. If the contents of GPR <i>$s</i> and GPR <i>$t</i> are equal, <br></br>branch to the effective 
              target address after the instruction in the delay slot is executed.
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>if ($s &gt; 0) pc += i &lt;&lt; 2</td>
            <td>
              To test a GPR then do a PC-relative conditional branch. An 18-bit signed offset (the 16 bit <i>i</i> field shifted left 2 bits) is
              added to the address of the instruction following <br></br>the branch (not the branch itself), in the branch delay slot, to form a 
              PC-relative effective target address. If the contents of GPR <i>$s</i> are greater than zero <br></br>(sign bit is 0 but value not 
              zero), branch to the effective target address after the instruction in the delay slot is executed.
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>if ($s &lt;= 0) pc += i &lt;&lt; 2</td>
            <td>
              To test a GPR then do a PC-relative conditional branch. An 18-bit signed offset (the 16 bit <i>i</i> field shifted left 2 bits) is
              added to the address of the instruction following <br></br>the branch (not the branch itself), in the branch delay slot, to form a 
              PC-relative effective target address. If the contents of GPR <i>$s</i> are less than or equal to zero<br></br> (sign bit is 1 or 
              value is zero), branch to the effective target address after the instruction in the delay slot is executed.
            </td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>if ($s != $t) pc += i &lt;&lt; 2</td>
            <td>
              To compare GPRs then do a PC-relative conditional branch.  An 18-bit signed offset (the 16 bit <i>offset</i> field shifted left 2 bits) is
              added to the address of the instruction following <br></br>the branch (not the branch itself), in the branch delay slot, to form a 
              PC-relative effective target address. If the contents of GPR <i>$s</i> and GPR <i>$t</i> are not equal,<br></br>branch to the effective target 
              address after the instruction in the delay slot is executed.
            </td>
          </tr>
        </tbody>
      </table>
      <h5>Arithmetic & Logic Table Operations</h5>
      <table class="table table-hover table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Operation</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>$d = $s + $t</td>
            <td>
              Add Word. To add 32-bit integers. if the addition does not overflow, the 32-bit result is placed into GPR <i>$d</i>.
              The other instruction Adds unsigned word. The 32-bit word <br></br>value in GPR <i>$s</i> is added to the 32-bit value 
              in GPR <i>$t</i> and the 32-bit arithmetic result is placed into GPR <i>$t</i>.<br></br> No Integer Overflow 
              exception occurs any circumstances.
              </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>$t = $s + SE(i)</td>
            <td>
              The purpose is to add an immediate word. To add a constant to a 32-bit integer. If overflow occurs, then trap. The 15-bit 
              signed immediate is added to the 32-bit value in GPR <i>$s</i>. If the addition does not overflow, <br></br>the 32-bit 
              result is placed into GPR <i>$t</i>. If the addition results in 32-bit 2's complementary aritmetic overflow, the destination 
              register is not modified and<br></br>an Integer Overflow exception occurs. The other instruction adds immediate unsigned word. 
              The 16-bit signed <i>immediate</i> is placed into GPR <i>$t</i>. "SE ( x )" means the<br></br>32-bit quantity obtained by 
              extending the value x on the left with its most significant bit.
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>$d = $s & $t</td>
            <td>
              To do a bitwise logical AND. The contents of GPR <i>$s</i> are combined with the contents of GPR <i>$t</i> in a bitwise logical 
              AND operation. If both operand bits are 1,<br></br>it will store 1. Otherwise, it will store 0. If both operand bits are 0, it 
              will store 0. The result is placed into GPR <i>$d</i>.
              </td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>$t = $s & ZE(i)</td>
            <td>
              To do a bitwise logical AND with a constant. The 16-bit immediate is zero-extended to the left and combined with the contents of 
              GPR <i>$s</i> in a bitwise logical AND operation.<br></br>"ZE ( x )" means the 32-bit quantity obtained by extending the value 
              <i>x</i> on the left with 0 bits. If both operands bits are 1 or 0, it will store 1 or 0, respectively. Otherwise,<br></br>it will 
              store 0. The result is placed into GPR <i>$t</i>.
            </td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>lo = $s / $t; hi = $s % $t</td>
            <td>
              To divide a 32-bit signed integers. The 32-bit word value in GPR <i>$s</i> is divided by the 32-bit value in GPR <i>t</i>, treating 
              operands as signed values. The 32-bit quotient is<br></br> placed into special register <i>lo</i> and the 32-bit remainder is placed into
              special register <i>hi</i>. No arithmetic exception occurs under any circumstances.<br></br>The other instruction divides unsigned word. 
              To divide the 32-bit unsigned integers, the 32-bit word value in GPR <i>$s</i> is divided by the 32-bit value<br></br>in GPR <i>$t</i>, 
              treating both operands as unsigned values. The 64-bit is stored similar to the first instruction.
              </td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>hi:lo = $s * $t</td>
            <td>
              To multiply 32-bit signed integers. The 32-bit word value in GPR <i>$s</i> is multiplied by the 32-bit value in GPR <i>$t</i> treating both 
              operands as signed values, to produce a 64-bit result.<br></br>The low-order bit word of the result is placed into special register <i>lo</i>,
              and the high-order 32-bit word is placed into special register <i>hi</i>.<br></br>No arithmetic exception occurs under any circumstances. The 
              other instruction multiplies 32-bit unsigned integers. Unlike the first instruction,<br></br>both operands are treated as unsigned values.
            </td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>$d = ~($s | $t)</td>
            <td>
              To do a bitwise logical NOT OR. The contents of GPR <i>$s</i> with the contents of GPR <i>$t</i> in a bitwise logical NOR operation. The result 
              is placed into GPR <i>$d</i>. The result obtained from ($s | $t)<br></br>is zero if both operand bits are zero. Otherwise it will store 1.
              The "<i>~</i>" will flip the results obtained from ($s | $t).
            </td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>$d = $s | $t</td>
            <td>
              To do a bitwise logical OR. The contents of GPR <i>$s</i> are combined with the contents of GPR <i>$t</i> in a bitwise logical OR operation. The 
              result is placed into GPR <i>$d</i>. The result obtained<br></br>from $s | $t is zero if both operand bits are zero. Otherwise at least one operands
              bit must be 1, the result will be 1.
              </td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>$t = $s | ZE(i)</td>
            <td>
              To do a bitwise logical OR with a constant. The 16-bit <i>immediate</i> is zero-extended to the left and combined with the contents of GPR <i>$s</i> in 
              a bitwise logical OR operation. The result is placed into GPR <i>$t</i>.<br></br>"ZE ( x )" means the 32-bit quantity obtained by extending the value 
              <i>x</i> on the left with 0 bits. At least one operand bit must be 1, it will return 1. If both are zero, it will return 0. If both are one, it will return 1.
            </td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td>%d = $t &lt;&lt; a</td>
            <td>
              To left-shift a word by a fixed number of bits. The contents of the low-order 32-bit word of GPR <i>$t</i> are shifted left <i>a</i> positions, inserting 
              zeros into the emptied bits. The result is placed in GPR <i>$d</i>.
            </td>
          </tr>
          <tr>
            <th scope="row">11</th>
            <td>$d = $t &lt;&lt; $s</td>
            <td>Similar to #10, but least significant 5-bits of GPR <i>$s</i> determine the amount to shift.</td>
          </tr>
          <tr>
            <th scope="row">12</th>
            <td>$d = $t &gt;&gt; a</td>
            <td>
              To execute an arithmetic right shift of a word by a fixed number of bits. The contents of the low-order 32-bit word of GPR <i>$t</i> are shifted right, 
              duplicating the sign-bit (bit 31) in the emptied bits;<br></br>the word result is placed in GPR <i>$d</i>. The bit shift amount is specified by <i>a</i>.
            </td>
          </tr>
          <tr>
            <th scope="row">13</th>
            <td>$d = $t &gt;&gt; $s</td>
            <td>Similar to #12, but least significant 5-bits of GPR <i>$s</i> determine the amount to shift.</td>
          </tr>
          <tr>
            <th scope="row">14</th>
            <td>$d = $t &gt;&gt;&gt; a</td>
            <td>
              To execute a logical right-shift of a word by a fixed number of bits. The contents of the low-order 32-bit word of GPR <i>$t</i> are shifted right <i>a</i> 
              positions, inserting zero into the emptied bits.
            </td>
          </tr>
          <tr>
            <th scope="row">15</th>
            <td>$d = $t &gt;&gt;&gt; $s</td>
            <td>Similar to #14, but least significant 5-bits of GPR <i>$s</i> determine the amount to shift.</td>
          </tr>
          <tr>
            <th scope="row">16</th>
            <td>$d = $s - $t</td>
            <td>
              To substract 32-bit integers. If overflow occurs, then trap. The 32-bit word value in GPR <i>$s</i> is subtracted from the 32-bit value in GPR <i>$t</i> to 
              produce a 32-bit result. If the subtraction results in 32-bits 2's complement<br></br>arithmetic overflow, then the destination register is not modified and 
              an integer Overflow exception occurs. If it does not overflow, the 32-bit result is placed into GPR <i>$d</i>.<br></br>The other instruction is similar, 
              however, the difference is that the subtraction does not result in 32-bits 2's complement so no integer overflow exception occurs under any circumstances.
            </td>
          </tr>
          <tr>
            <th scope="row">17</th>
            <td>$d = $s ^ $t</td>
            <td>
              To do a bitwise logical exclusive OR. Combine the contents of GPR <i>$s</i> and GPR <i>$t</i> in a bitwise logical exclusive OR operation and places the results
              into GPR <i>$d</i>. <br></br>Stores 1 if only 1 operand bit is 1. If both are either 1 bit or 0, it will store 0.
            </td>
          </tr>
          <tr>
            <th scope="row">18</th>
            <td>$d = $s ^ ZE(i)</td>
            <td>
              Similar to #17, however this does a bitwise logical exclusive OR with a constant. It combines the contents of GPR <i>$s</i> and the 16-bit zero-extended 
              <i>immediate</i> in a bitwise logical exclusive<br></br>OR operation and places the results into GPR <i>$d</i>.
            </td>
          </tr>
        </tbody>
      </table>
      <h5>Comparison Operations</h5>
      <table class="table table-hover table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Operation</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>$d = ($s &lt; $t)</td>
            <td>
                To record the result of a less-than comparison. It compares the contents of GPR <i>$s</i> and GPR <i>$t</i> as signed integers; record the boolean result 
                of the comparison in GPR <i>$d</i>. If GPR <i>$s</i> is less than GPR <i>$t</i>,<br></br>the result is 1 (true); otherwise, it is 0 (false). The arithmetic 
                comparison does not cause an Integer Overflow exception. The other instruction is similar, however, it compares the contents of unsigned values.
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>$t = ($s &lt; SE(i))</td>
            <td>
                To record the result of a less-than comparison with a constant. It compares the contents of GPR <i>$s</i> and the 16-bit signed <i>immediate</i> as signed 
                integers; records the Boolean result comparison in GPR <i>$t</i>.<br></br>If GPR <i>$s</i> is less than <i>immediate</i>, the result is 1 (true); otherwise, 
                it is 0 (false). The arithmetic comparison does not cause an integer overflow exception.<br></br>The other instruction is similar, however, it record the 
                result of an unsigned less-than comparison with a constant. Because the 16-bit immediate is sign-extended before comparison, the instruction<br></br> can 
                represent the smallest or largest unsigned numbers. The represented values are at the minimum [0, 32767] or maximum [max_unsigned-32767, max_unsigned] end 
                of the unsigned range.
            </td>
          </tr>
        </tbody>
      </table>
      <h5>Exception and Interrupt Operations</h5>
      <table class="table table-hover table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Operation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Print integer value in $4</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Read integer value into $2</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Terminate program execution</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Print ASCII character in $4</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Read ASCII character into $2</td>
          </tr>
        </tbody>
      </table>
      <h5>Data Movement Operations</h5>
      <table class="table table-hover table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Operation</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>$d = hi</td>
            <td>
              To copy the special purpose <i>hi</i> register to a GPR. The contents of special register <i>hi</i> are loaded into GPR <i>$d</i>.
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>$d = lo</td>
            <td>
              To copy the special purpose <i>lo</i> register to a GPR. The contents of special register <i>lo</i> are loaded into GPR <i>$d</i>.
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>hi = $s</td>
            <td>
              To copy a GPR to the special purpose register <i>hi</i>. The contents of GPR <i>$s</i> are loaded into special register <i>hi</i>.
            </td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>lo = $s</td>
            <td>
              To copy a GPR to the special purpose register <i>lo</i>. The contents of GPR <i>$s</i> are loaded into special register <i>lo</i>.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Directory;
