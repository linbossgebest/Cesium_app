define(["./when-cbf8cd21","./Check-35e1a91d","./Math-e66fad2a","./RuntimeError-f4c64df1","./WebGLConstants-95ceb4e9","./ComponentDatatype-7ee14e67","./IndexDatatype-66caba23","./createTaskProcessorWorker"],function(f,e,t,m,r,A,b,n){"use strict";var w;function l(e,t,r){var n,a=e.num_points(),o=r.num_components(),i=new w.AttributeQuantizationTransform;if(i.InitFromAttribute(r)){for(var u=new Array(o),s=0;s<o;++s)u[s]=i.min_value(s);n={quantizationBits:i.quantization_bits(),minValues:u,range:i.range(),octEncoded:!1}}w.destroy(i),(i=new w.AttributeOctahedronTransform).InitFromAttribute(r)&&(n={quantizationBits:i.quantization_bits(),octEncoded:!0}),w.destroy(i);var d=a*o,c=f.defined(n)?function(e,t,r,n,a){var o,i;n.quantizationBits<=8?(i=new w.DracoUInt8Array,o=new Uint8Array(a),t.GetAttributeUInt8ForAllPoints(e,r,i)):(i=new w.DracoUInt16Array,o=new Uint16Array(a),t.GetAttributeUInt16ForAllPoints(e,r,i));for(var u=0;u<a;++u)o[u]=i.GetValue(u);return w.destroy(i),o}(e,t,r,n,d):function(e,t,r,n){var a,o;switch(r.data_type()){case 1:case 11:o=new w.DracoInt8Array,a=new Int8Array(n),t.GetAttributeInt8ForAllPoints(e,r,o);break;case 2:o=new w.DracoUInt8Array,a=new Uint8Array(n),t.GetAttributeUInt8ForAllPoints(e,r,o);break;case 3:o=new w.DracoInt16Array,a=new Int16Array(n),t.GetAttributeInt16ForAllPoints(e,r,o);break;case 4:o=new w.DracoUInt16Array,a=new Uint16Array(n),t.GetAttributeUInt16ForAllPoints(e,r,o);break;case 5:case 7:o=new w.DracoInt32Array,a=new Int32Array(n),t.GetAttributeInt32ForAllPoints(e,r,o);break;case 6:case 8:o=new w.DracoUInt32Array,a=new Uint32Array(n),t.GetAttributeUInt32ForAllPoints(e,r,o);break;case 9:case 10:o=new w.DracoFloat32Array,a=new Float32Array(n),t.GetAttributeFloatForAllPoints(e,r,o)}for(var i=0;i<n;++i)a[i]=o.GetValue(i);return w.destroy(o),a}(e,t,r,d),y=A.ComponentDatatype.fromTypedArray(c);return{array:c,data:{componentsPerAttribute:o,componentDatatype:y,byteOffset:r.byte_offset(),byteStride:A.ComponentDatatype.getSizeInBytes(y)*o,normalized:r.normalized(),quantization:n}}}function a(e){var t=new w.Decoder,r=["POSITION","NORMAL","COLOR","TEX_COORD"];if(e.dequantizeInShader)for(var n=0;n<r.length;++n)t.SkipAttributeTransform(w[r[n]]);var a=e.bufferView,o=new w.DecoderBuffer;if(o.Init(e.array,a.byteLength),t.GetEncodedGeometryType(o)!==w.TRIANGULAR_MESH)throw new m.RuntimeError("Unsupported draco mesh geometry type.");var i=new w.Mesh,u=t.DecodeBufferToMesh(o,i);if(!u.ok()||0===i.ptr)throw new m.RuntimeError("Error decoding draco mesh geometry: "+u.error_msg());w.destroy(o);var s,d,c={},y=e.compressedAttributes;for(var f in y){y.hasOwnProperty(f)&&(s=y[f],d=t.GetAttributeByUniqueId(i,s),c[f]=l(i,t,d))}var A={indexArray:function(e,t){for(var r=e.num_points(),n=e.num_faces(),a=new w.DracoInt32Array,o=3*n,i=b.IndexDatatype.createTypedArray(r,o),u=0,s=0;s<n;++s)t.GetFaceFromMesh(e,s,a),i[u+0]=a.GetValue(0),i[u+1]=a.GetValue(1),i[u+2]=a.GetValue(2),u+=3;return w.destroy(a),{typedArray:i,numberOfIndices:o}}(i,t),attributeData:c};return w.destroy(i),w.destroy(t),A}function o(e){return(f.defined(e.primitive)?a:function(e){var t=new w.Decoder;e.dequantizeInShader&&(t.SkipAttributeTransform(w.POSITION),t.SkipAttributeTransform(w.NORMAL));var r=new w.DecoderBuffer;if(r.Init(e.buffer,e.buffer.length),t.GetEncodedGeometryType(r)!==w.POINT_CLOUD)throw new m.RuntimeError("Draco geometry type must be POINT_CLOUD.");var n=new w.PointCloud,a=t.DecodeBufferToPointCloud(r,n);if(!a.ok()||0===n.ptr)throw new m.RuntimeError("Error decoding draco point cloud: "+a.error_msg());w.destroy(r);var o,i,u={},s=e.properties;for(var d in s){s.hasOwnProperty(d)&&(o=s[d],i=t.GetAttributeByUniqueId(n,o),u[d]=l(n,t,i))}return w.destroy(n),w.destroy(t),u})(e)}function i(e){w=e,self.onmessage=n(o),self.postMessage(!0)}return function(e){var t=e.data.webAssemblyConfig;if(f.defined(t))return require([t.modulePath],function(e){f.defined(t.wasmBinaryFile)?(f.defined(e)||(e=self.DracoDecoderModule),e(t).then(function(e){i(e)})):i(e())})}});
