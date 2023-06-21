'use client';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document, BLOCKS } from '@contentful/rich-text-types';
import Image from 'next/image';
import VideoPlayer from './VideoPlayer';

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any, children: any) => {
      if (node.data.target.fields.file.contentType.includes('video')) {
        return (
          <div className="w-full max-w-md m-4 self-center">  
              <VideoPlayer
                url={`https:${node.data.target.fields.file.url}`}
                controls
                width="100%"
                style={{
                  width: '100%',
                  borderRadius: '0.75rem',
                  margin: '1rem',
                  alignSelf: 'center',
                }}
              />
          </div>
        );
      }
      if (node.data.target.fields.file.contentType.includes('image')) {
        return (
          <Image
            src={`https:${node.data.target.fields.file.url}`}
            height={node.data.target.fields.file.details.image.height}
            width={node.data.target.fields.file.details.image.width}
            alt={node.data.target.fields.description}
            className="relative w-full max-w-md m-4 self-center rounded-xl"
            loading="lazy"
          />
        );
      }
    },
  },
};

const DocumentToComponents = ({
  richTextDocument,
}: {
  richTextDocument: Document;
}) => {
  return documentToReactComponents(richTextDocument, renderOptions);
};

export default DocumentToComponents;
