// This file was procedurally generated from the following sources:
// - src/class-elements/grammar-privatemeth-duplicate-meth-nestedclassmeth.case
// - src/class-elements/syntax/valid/cls-decl-elements-valid-syntax-export-default.template
/*---
description: It's valid if a nested class shadows a private method (class declaration module default export)
esid: prod-ClassElement
features: [class-methods-private, class]
flags: [generated, module]
info: |
    Static Semantics: Early Errors

    ClassBody : ClassElementList
        It is a Syntax Error if PrivateBoundNames of ClassBody contains any duplicate entries, unless the name is used once for a getter and once for a setter and in no other entries.

---*/


export default class {
  constructor() {
    class B {
      #m() {}
    }
  }

  #m() {}
}
