define(["exports","./when-cbf8cd21","./Check-35e1a91d","./Transforms-23521d7e"],function(e,t,i,r){"use strict";e.GeometryInstance=function(e){e=t.defaultValue(e,t.defaultValue.EMPTY_OBJECT),this.geometry=e.geometry,this.modelMatrix=r.Matrix4.clone(t.defaultValue(e.modelMatrix,r.Matrix4.IDENTITY)),this.id=e.id,this.pickPrimitive=e.pickPrimitive,this.attributes=t.defaultValue(e.attributes,{}),this.westHemisphereGeometry=void 0,this.eastHemisphereGeometry=void 0}});
